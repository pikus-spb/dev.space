import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ROSCHINO_LATITUDE, ROSCHINO_LONGITUDE } from 'src/shared/geo-location';

export interface DaylightData {
  longitude: string;
  sunrise: string;
  sunset: string;
}

const API_URL = `https://api.bf5.ru/sun?lat=${ROSCHINO_LATITUDE}&lon=${ROSCHINO_LONGITUDE}`;

@Injectable({
  providedIn: 'root',
})
export class DaylightService {
  constructor(private http: HttpClient) {}

  get(): Observable<DaylightData> {
    return this.http.get<DaylightData>(API_URL);
  }
}
