import { Component } from '@angular/core';
import { WidgetsComponent } from '../widgets/widgets.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  imports: [WidgetsComponent],
  standalone: true,
})
export class HomeComponent {}
