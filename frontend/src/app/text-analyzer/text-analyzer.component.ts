import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { TextAnalyzerService } from '../text-analyzer.service';

@Component({
  selector: 'app-text-analyzer',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule],
  templateUrl: './text-analyzer.component.html',
  styleUrls: ['./text-analyzer.component.css']
})
export class TextAnalyzerComponent {
  inputText: string = '';
  analysisType: string = 'vowels';
  results: any = {};
  previousResults: any[] = [];
  onlineMode: boolean = true;

  constructor(private textAnalyzerService: TextAnalyzerService) { }

  analyzeText() {
    console.log('Analyze Text called. Online mode:', this.onlineMode);
    if (this.onlineMode) {
      this.textAnalyzerService.analyzeText(this.analysisType, this.inputText).subscribe(response => {
        console.log('Response from server:', response);
        this.results = response;
        this.previousResults.push({ inputText: this.inputText, results: response });
      });
    } else {
      console.log('Offline analysis');
      this.results = this.analyzeTextOffline(this.analysisType, this.inputText);
      console.log('Offline analysis results:', this.results);
      this.previousResults.push({ inputText: this.inputText, results: this.results });
    }
  }

  analyzeTextOffline(type: string, text: string): any {
    const result: any = {};
    const chars = text.split('');
    if (type === 'vowels') {
      chars.forEach(char => {
        if ('aeiouAEIOU'.includes(char)) {
          result[char.toLowerCase()] = result[char.toLowerCase()] ? result[char.toLowerCase()] + 1 : 1;
        }
      });
    } else if (type === 'consonants') {
      chars.forEach(char => {
        if (/[a-zA-Z]/.test(char) && !'aeiouAEIOU'.includes(char)) {
          result[char.toLowerCase()] = result[char.toLowerCase()] ? result[char.toLowerCase()] + 1 : 1;
        }
      });
    }
    return result;
  }

  toggleMode() {
    this.onlineMode = !this.onlineMode;
    console.log('Online mode toggled. Now:', this.onlineMode);
  }
}
