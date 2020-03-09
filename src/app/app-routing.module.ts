import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/project/overview' },

  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'order', loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule) },
  { path: 'mxstats', loadChildren: () => import('./pages/mxstats/mxstats.module').then(m => m.MxstatsModule) },

  { path: 'project', loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule) }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
