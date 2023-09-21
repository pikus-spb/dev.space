import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

const routes: Route[] = [
  {
    path: 'widgets',
    loadComponent() {
      return import('src/widgets/cards').then(
        imported => imported.CardsComponent
      );
    },
  },
  {
    path: '',
    loadComponent() {
      return import('src/app/main').then(imported => imported.MainComponent);
    },
    children: [
      {
        path: 'home',
        loadComponent() {
          return import('src/pages/home').then(
            imported => imported.HomeComponent
          );
        },
      },
      {
        path: 'links',
        loadComponent() {
          return import('src/pages/links').then(
            imported => imported.LinksComponent
          );
        },
      },
      {
        path: 'about',
        loadComponent() {
          return import('src/pages/about').then(
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
