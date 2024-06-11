import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TabsPage } from './tabs.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: TabsPage,
        children: [
          {
            path: 'beranda',
            children: [
              {
                path: '',
                loadChildren: () => import('../pages/beranda/beranda.module').then(m => m.BerandaPageModule)
              }
            ]
          },
          {
            path : 'food',
            children: [
              {
                path: '',
                loadChildren: () => import('../pages/food/food.module').then(m => m.FoodPageModule)
              }
            ]
          },
          {
            path: 'akun',
            children: [
              {
                path: '',
                loadChildren: () => import('../akun/akun.module').then(m => m.AkunPageModule)
              }
            ]
          }
        ]
      }
    ])
  ],
  declarations: [TabsPage]
})
export class TabsPageModule { }
