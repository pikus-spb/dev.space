import { Component, DestroyRef } from '@angular/core';
import { NavigationEnd, NavigationStart, Router } from '@angular/router';
import { filter, tap } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
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
