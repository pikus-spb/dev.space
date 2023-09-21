import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

export interface CurrencyRates {
  eur: string;
  usd: string;
}

interface CurrencyData {
  rates: {
    EUR: number;
    USD: number;
  };
}

const API_URL = 'https://www.cbr-xml-daily.ru/latest.js';

@Injectable({
  providedIn: 'root',
})
export class CurrencyRatesService {
  constructor(private http: HttpClient) {}

  get(): Observable<CurrencyRates> {
    return this.http
      .get<CurrencyData>(API_URL)
      .pipe(map((data: CurrencyData) => this.map(data)));
  }

  private map(data: CurrencyData): CurrencyRates {
    return {
      eur: (1 / data.rates.EUR).toFixed(2),
      usd: (1 / data.rates.USD).toFixed(2),
    } as CurrencyRates;
  }
}
