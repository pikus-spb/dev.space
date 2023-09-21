import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ROSCHINO_LATITUDE, ROSCHINO_LONGITUDE } from 'src/shared/geo-location';

export interface Weather {
  temperature: number;
  code: number;
}

interface WeatherResponse {
  current_weather: {
    temperature: string;
    weathercode: string;
  };
}

const API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${ROSCHINO_LATITUDE}&longitude=${ROSCHINO_LONGITUDE}&current_weather=true`;

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  constructor(private http: HttpClient) {}

  get(): Observable<Weather> {
    return this.http
      .get<WeatherResponse>(API_URL)
      .pipe(map((data: WeatherResponse) => this.map(data)));
  }

  private map(data: WeatherResponse): Weather {
    return {
      temperature: Number(data.current_weather.temperature),
      code: Number(data.current_weather.weathercode),
    } as Weather;
  }
}
