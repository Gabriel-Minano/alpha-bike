import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    title: 'Alpha Bike | Inicio',
    loadComponent: () => import('./pages/home/home').then((m) => m.Home),
  },

  // TODO: agregar aquí las demás páginas a medida que se desarrollen:
  // { path: 'nosotros',   loadComponent: () => import('./pages/about/about').then(m => m.About) },
  // { path: 'bicicletas', loadComponent: () => ... },
  // { path: 'accesorios', loadComponent: () => ... },
  // { path: 'servicios',  loadComponent: () => ... },
  // { path: 'contacto',   loadComponent: () => ... },

  // Mientras no existan, cualquier otra ruta vuelve al inicio.
  { path: '**', redirectTo: '' },
];
