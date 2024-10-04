import { Component, OnInit } from '@angular/core';
import { WeatherService, WeatherResponse } from '../services/weather.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.page.html',
  styleUrls: ['./page1.page.scss'],
})
export class Page1Page implements OnInit {
  weatherData: WeatherResponse | null = null; // Usando a interface para o tipo

  constructor(private weatherService: WeatherService) {}

  ngOnInit() {
    this.weatherService.getWeather().subscribe((data: WeatherResponse) => {
      this.weatherData = data;
    });
  }
}
