import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TextAnalyzerComponent } from './text-analyzer.component';
import { TextAnalyzerService } from '../text-analyzer.service';
import { of } from 'rxjs';

describe('TextAnalyzerComponent', () => {
  let component: TextAnalyzerComponent;
  let fixture: ComponentFixture<TextAnalyzerComponent>;
  let textAnalyzerService: TextAnalyzerService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule, HttpClientTestingModule, TextAnalyzerComponent],
      providers: [TextAnalyzerService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TextAnalyzerComponent);
    component = fixture.componentInstance;
    textAnalyzerService = TestBed.inject(TextAnalyzerService);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should analyze text for vowels correctly in offline mode', () => {
    const text = 'example';
    const expectedResults = { e: 2, a: 1 };
    component.analysisType = 'vowels';
    component.onlineMode = false;
    component.inputText = text;
    component.analyzeText();
    expect(component.results).toEqual(expectedResults);
  });

  it('should analyze text for consonants correctly in offline mode', () => {
    const text = 'hello';
    const expectedResults = { h: 1, l: 2 };
    component.analysisType = 'consonants';
    component.onlineMode = false;
    component.inputText = text;
    component.analyzeText();
    expect(component.results).toEqual(expectedResults);
  });

  it('should analyze text for vowels correctly in online mode', () => {
    const text = 'example';
    const expectedResults = { e: 2, a: 1 };
    spyOn(textAnalyzerService, 'analyzeText').and.returnValue(of(expectedResults));
    component.analysisType = 'vowels';
    component.onlineMode = true;
    component.inputText = text;
    component.analyzeText();
    expect(component.results).toEqual(expectedResults);
  });

  it('should analyze text for consonants correctly in online mode', () => {
    const text = 'hello';
    const expectedResults = { h: 1, l: 2 };
    spyOn(textAnalyzerService, 'analyzeText').and.returnValue(of(expectedResults));
    component.analysisType = 'consonants';
    component.onlineMode = true;
    component.inputText = text;
    component.analyzeText();
    expect(component.results).toEqual(expectedResults);
  });
});
