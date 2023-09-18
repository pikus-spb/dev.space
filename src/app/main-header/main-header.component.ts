import { Component, EventEmitter, Output } from '@angular/core';
import { MaterialModule } from '../material.module';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.less'],
  standalone: true,
  imports: [ MaterialModule ]
})
export class MainHeaderComponent {
  @Output() onMenuClick = new EventEmitter<void>();
}
