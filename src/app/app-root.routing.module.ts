import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'widgets',
    loadComponent() {
      return import('./widgets/widgets.component').then(
        imported => imported.WidgetsComponent
      );
    },
  },
  {
    path: '',
    loadComponent: () =>
      import('./main-app/main-app.component').then(
        imported => imported.MainAppComponent
      ),
    children: [
      {
        path: 'home',
        loadComponent() {
          return import('./home/home.component').then(
            imported => imported.HomeComponent
          );
        },
      },
      {
        path: 'links',
        loadComponent() {
          return import('./links/links.component').then(
            imported => imported.LinksComponent
          );
        },
      },
      {
        path: 'about',
        loadComponent() {
          return import('./about/about.component').then(
            imported => imported.AboutComponent
          );
        },
      },
      { path: '**', redirectTo: 'home' },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
