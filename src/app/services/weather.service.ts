import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface WeatherResponse {
  main: {
    temp: number;
    humidity: number;
  };
  weather: Array<{
    description: string;
  }>;
}

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '71e8b91ed95619c56937a69a19b0e6dc'; // Substitua pela sua chave de API
  private apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Rio%20de%20Janeiro&appid=${this.apiKey}&units=metric`;

  constructor(private http: HttpClient) {}

  getWeather(): Observable<WeatherResponse> {
    return this.http.get<WeatherResponse>(this.apiUrl);
  }
}
