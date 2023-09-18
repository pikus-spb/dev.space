import { Component } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Subject, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../../material.module';

const ROSCHINO_LONGITUDE = 29.603100;
const ROSCHINO_LATITUDE = 60.256511;
const WEATHER_API_URL = `https://api.open-meteo.com/v1/forecast?latitude=${ROSCHINO_LATITUDE}&longitude=${ROSCHINO_LONGITUDE}&current_weather=true`;
const WEATHER_CODE_DESCRIPTION = Object.values({
  0: 'Развитие облаков не наблюдается',
  1: 'Облака обычно растворяются или становятся менее развитыми',
  2: 'Состояние неба в целом без изменений',
  3: 'Облака формируются или развиваются',
  4: 'Видимость снижается из-за дыма, например из-за лесных пожаров, промышленного дымы или вулканического пепла',
  5: 'Туман',
  6: 'Широко распространенная пыль во взвешенном состоянии в воздухе',
  7: 'Пыль или песок, поднятые ветром, нет хорошо развитых пылевых или песчаных вихрей, а также нет пыльной или песчаной бури',
  8: 'Хорошо развитые пылевые или песчаные вихри, в течение текущего часа, но без пыльной или песчаной бури',
  9: 'Пыльная или песчаная буря в пределах видимости в течение текущего часа',
  10: 'Туман',
  11: 'Места мелкого тумана или ледяного тумана, глубиной не более 2 метров',
  12: 'Более или менее без именений',
  13: 'Молния видна, но грома не слышно',
  14: 'Осадки в пределах видимости, не достигающие земли',
  15: 'Осадки в пределах видимости, достигающие земли, но удаленные, т.е. находящиеся на расстоянии более 5 км',
  16: 'Осадки в пределах видимости, достигающие земли вблизи, но не на ней',
  17: 'Гроза, но без осадков',
  18: 'Шквалы в пределах видимости в течение текущего часа',
  19: 'Воронкообразные облака'
});
@Component({
  selector: 'weather-widget',
  templateUrl: './weather-widget.component.html',
  styleUrls: ['./weather-widget.component.less'],
  imports: [ MaterialModule, HttpClientModule, CommonModule ],
  standalone: true
})
export class WeatherWidgetComponent {
  temperature: Subject<number> = new Subject();
  temperatureDescription: Subject<string> = new Subject();

  constructor(http: HttpClient) {
    http.get(WEATHER_API_URL)
      .pipe(
          takeUntilDestroyed(),
          tap((data: any) => {
            this.temperature.next(data.current_weather.temperature);
            this.temperatureDescription.next(WEATHER_CODE_DESCRIPTION[data.current_weather.weathercode]);
          })
      )
      .subscribe();
  }

}
