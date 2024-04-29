import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ThemeSwitcherComponent } from './theme-switcher/theme-switcher.component';
import { ApplicationViewComponent } from './application-view/application-view.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: '/applicationView',
    pathMatch: 'full'
  },
  
  {
    path:'applicationView',
    component:ApplicationViewComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full',
  },
  {
    path: 'themes',
    component: ThemeSwitcherComponent,
    data: {
      title: 'Theme Switching',
      showHeader: false,
    },
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {})],
  exports: [RouterModule],
})
export class AppRoutingModule { }
