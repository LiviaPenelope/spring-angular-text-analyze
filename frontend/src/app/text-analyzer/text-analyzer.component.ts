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
  currentResultType: string = this.analysisType;
  results: any = {};
  resultsKeys: string[] = [];
  previousResults: any[] = [];
  onlineMode: boolean = true;

  constructor(private textAnalyzerService: TextAnalyzerService) {}

  analyzeText() {
    this.currentResultType = this.analysisType; // Set currentResultType to the selected analysisType

    if (this.onlineMode) {
      this.textAnalyzerService.analyzeText(this.analysisType, this.inputText).subscribe(response => {
        this.results = response;
        this.resultsKeys = Object.keys(this.results);
        this.previousResults.unshift({
          inputText: this.inputText,
          results: response,
          resultsKeys: Object.keys(response),
          analysisType: this.analysisType,
          isOnline: this.onlineMode
        });
      });
    } else {
      this.results = this.analyzeTextOffline(this.analysisType, this.inputText);
      this.resultsKeys = Object.keys(this.results);
      this.previousResults.unshift({
        inputText: this.inputText,
        results: this.results,
        resultsKeys: Object.keys(this.results),
        analysisType: this.analysisType,
        isOnline: this.onlineMode
      });
    }
  }

  analyzeTextOffline(type: string, text: string): any {
    const result: any = {};
    const chars = text.split('');
    if (type === 'vowels') {
      chars.forEach(char => {
        if ('aeiouAEIOU'.includes(char)) {
          result[char.toUpperCase()] = result[char.toUpperCase()] ? result[char.toUpperCase()] + 1 : 1;
        }
      });
    } else if (type === 'consonants') {
      chars.forEach(char => {
        if (/[a-zA-Z]/.test(char) && !'aeiouAEIOU'.includes(char)) {
          result[char.toUpperCase()] = result[char.toUpperCase()] ? result[char.toUpperCase()] + 1 : 1;
        }
      });
    }
    return result;
  }
}
