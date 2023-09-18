import { Component } from '@angular/core';
import { NavigationEnd, NavigationStart, Router, RouterModule } from '@angular/router';
import { filter, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MaterialModule } from '../material.module';
import { MainHeaderComponent } from '../main-header/main-header.component';
import { MainMenuComponent } from '../main-menu/main-menu.component';
import { CopyrightComponent } from '../copyright/copyright.component';

@Component({
  selector: 'main-app',
  templateUrl: './main-app.component.html',
  styleUrls: ['./main-app.component.less'],
  imports: [ MaterialModule, MainHeaderComponent, MainMenuComponent, RouterModule, CopyrightComponent ],
  standalone: true
})
export class MainAppComponent {
  loading = false;

  constructor(private router: Router) {
    this._subscribeToRouteChange();
  }

  private _subscribeToRouteChange() {
    this.router.events.pipe(
        takeUntilDestroyed(),
        filter(event => event instanceof NavigationStart),
        tap(() => {
          this.loading = true;
        }),
    ).subscribe();
    this.router.events.pipe(
        takeUntilDestroyed(),
        filter(event => event instanceof NavigationEnd),
        tap(() => {
          this.loading = false;
        }),
    ).subscribe();
  }
}
