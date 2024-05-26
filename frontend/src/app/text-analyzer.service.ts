import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TextAnalyzerService {

  private apiUrl = environment.apiUrl + '/analyze';

  constructor(private http: HttpClient) { }

  analyzeText(type: string, text: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}?type=${type}&text=${text}`);
  }
}
