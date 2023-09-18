import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.less'],
  standalone: true,
  imports: [ RouterModule, MaterialModule ]
})
export class MainMenuComponent {

}
