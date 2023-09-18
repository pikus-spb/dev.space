import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, tap } from 'rxjs';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

@Component({
  selector: 'currency-widget',
  templateUrl: './currency-widget.component.html',
  styleUrls: ['./currency-widget.component.less'],
  imports: [CommonModule, MaterialModule],
  standalone: true,
})
export class CurrencyWidgetComponent {
  eurRate: Subject<string> = new Subject();
  usdRate: Subject<string> = new Subject();

  constructor(http: HttpClient) {
    http
      .get('https://www.cbr-xml-daily.ru/latest.js')
      .pipe(
        takeUntilDestroyed(),
        tap((data: any) => {
          this.eurRate.next((1 / data.rates.EUR).toFixed(2));
          this.usdRate.next((1 / data.rates.USD).toFixed(2));
        })
      )
      .subscribe();
  }
}
