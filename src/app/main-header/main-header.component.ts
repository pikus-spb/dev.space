import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.less']
})
export class MainHeaderComponent {
  @Output() onMenuClick = new EventEmitter<void>();
}
