import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HttpClient } from '@angular/common/http';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, tap } from 'rxjs';
import { MatIconModule } from '@angular/material/icon';
import { CommonModule } from '@angular/common';
import { HoursPipe } from './hours.pipe';
import { MinutesPipe } from './minutes.pipe';

const ROSCHINO_LONGITUDE = 29.603100;
const ROSCHINO_LATITUDE = 60.256511;
const WEATHER_API_URL = `https://api.bf5.ru/sun?lat=${ROSCHINO_LATITUDE}&lon=${ROSCHINO_LONGITUDE}`;

@Component({
  selector: 'daylight-widget',
  templateUrl: './daylight-widget.component.html',
  styleUrls: ['./daylight-widget.component.less'],
  imports: [ CommonModule, MatCardModule, MatIconModule, HoursPipe, MinutesPipe ],
  standalone: true
})
export class DaylightWidgetComponent {
  longitude: Subject<string> = new Subject();
  sunrise: Subject<string> = new Subject();
  sunset: Subject<string> = new Subject();

  constructor(http: HttpClient) {
    http.get(WEATHER_API_URL)
        .pipe(
            takeUntilDestroyed(),
            tap((data: any) => {
              this.longitude.next(data.longitude);
              this.sunrise.next(data.sunrise);
              this.sunset.next(data.sunset);
            })
        )
        .subscribe();
  }
}
