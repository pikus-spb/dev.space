import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadComponent() {
      return import('./home/home.component').then((imported) => imported.HomeComponent);
    }
  },
  {
    path: 'links',
    loadComponent() {
      return import('./links/links.component').then((imported) => imported.LinksComponent);
    }
  },
  {
    path: 'about',
    loadComponent() {
      return import('./about/about.component').then((imported) => imported.AboutComponent);
    }
  },
  { path: '**', redirectTo: 'home' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
