/* import { Routes } from '@angular/router';

export const routes: Routes = [];
 */
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'recetario',
    children: [
      {
        path: 'home',
        loadComponent: () => import('./home/home.component').then(m => m.HomeComponent)
      },
      {
        path: 'postres',
        loadComponent: () => import('./categories/postres/postres.component').then(m => m.PostresComponent)
      },
      {
        path: 'ensaladas',
        loadComponent: () => import('./categories/ensaladas/ensaladas.component').then(m => m.EnsaladasComponent)
      },
      {
        path: 'platos',
        loadComponent: () => import('./categories/platofuerte/platofuerte.component').then(m => m.PlatofuerteComponent)
      },
      {
        path: '**',
        redirectTo: 'home'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'recetario'
  }
];
