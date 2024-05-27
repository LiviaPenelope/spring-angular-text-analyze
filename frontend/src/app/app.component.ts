import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAnalyzerComponent } from './text-analyzer/text-analyzer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TextAnalyzerComponent],
  template: `
    <div>
      <h1>{{ title }}</h1>
      <app-text-analyzer></app-text-analyzer>
    </div>
  `,
})
export class AppComponent {
  title = 'Vowel & Consonant Counter';
}
