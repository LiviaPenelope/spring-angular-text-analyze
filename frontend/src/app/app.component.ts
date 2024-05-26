import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TextAnalyzerComponent } from './text-analyzer/text-analyzer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, TextAnalyzerComponent],
  template: `
    <app-text-analyzer></app-text-analyzer>
  `,
})
export class AppComponent { }
