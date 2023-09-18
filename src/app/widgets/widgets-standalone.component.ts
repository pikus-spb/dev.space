import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { WidgetsComponent } from './widgets.component';

@Component({
  selector: 'widgets-standalone',
  template: `<section><widgets></widgets></section> `,
  styles: [`
    section {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }
  `],
  imports: [
    MaterialModule,
    WidgetsComponent
  ],
  standalone: true
})
export class WidgetsStandaloneComponent {

}
