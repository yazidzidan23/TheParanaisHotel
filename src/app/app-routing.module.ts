import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'beranda',
    loadChildren: () => import('./pages/beranda/beranda.module').then(m => m.BerandaPageModule)
  },
  {
    path: 'akun',
    loadChildren: () => import('./akun/akun.module').then(m => m.AkunPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'food',
    loadChildren: () => import('./pages/food/food.module').then( m => m.FoodPageModule)
  },
  {
    path: 'rooms',
    loadChildren: () => import('./rooms/rooms.module').then(m => m.RoomsPageModule)
  },
  {
    path: 'reservation',
    loadChildren: () => import('./reservation/reservation.module').then(m => m.ReservationPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
