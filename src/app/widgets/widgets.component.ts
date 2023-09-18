import { Component } from '@angular/core';
import { WeatherWidgetComponent } from './weather-widget/weather-widget.component';
import { CurrencyWidgetComponent } from './currency-widget/currency-widget.component';
import { DaylightWidgetComponent } from './daylight-widget/daylight-widget.component';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'widgets',
  templateUrl: './widgets.component.html',
  styleUrls: ['./widgets.component.less'],
  imports: [
    MaterialModule,
    WeatherWidgetComponent,
    CurrencyWidgetComponent,
    DaylightWidgetComponent
  ],
  standalone: true
})
export class WidgetsComponent {

}
