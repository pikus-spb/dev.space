import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { Subject, tap } from 'rxjs';
import { HoursPipe } from 'src/entities/pipes/ui/hours.pipe';
import { MinutesPipe } from 'src/entities/pipes/ui/minutes.pipe';
import { MaterialModule } from 'src/shared/material/ui/material.module';
import { DaylightData, DaylightService } from '../api/daylight.service';

@Component({
  selector: 'daylight-card',
  templateUrl: './daylight-card.component.html',
  styleUrls: ['./daylight-card.component.less'],
  imports: [CommonModule, MaterialModule, HoursPipe, MinutesPipe],
  standalone: true,
})
export class DaylightCardComponent {
  longitude: Subject<string> = new Subject();
  sunrise: Subject<string> = new Subject();
  sunset: Subject<string> = new Subject();

  constructor(api: DaylightService) {
    api
      .get()
      .pipe(
        takeUntilDestroyed(),
        tap((data: DaylightData) => {
          this.longitude.next(data.longitude);
          this.sunrise.next(data.sunrise);
          this.sunset.next(data.sunset);
        })
      )
      .subscribe();
  }
}
