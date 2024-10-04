import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TranslationService {
  private apiUrl = 'https://libretranslate.com/translate'; // URL da API de tradução

  constructor(private http: HttpClient) {}

  translate(text: string): Observable<string> {
    const body = {
      q: text,
      source: 'en',  // Idioma de origem (pode ser alterado)
      target: 'pt',  // Idioma alvo (português)
      format: 'text',
    };

    return this.http.post<any>(this.apiUrl, body)
      .pipe(map(response => response.translatedText)); // Retorna o texto traduzido
  }
}

