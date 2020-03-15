import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/project/overview' },

  { path: 'project', loadChildren: () => import('./pages/project/project.module').then(m => m.ProjectModule) },

  { path: 'todo', loadChildren: () => import('./pages/todo/todo.module').then(m => m.TodoModule) },
  { path: 'vendor', loadChildren: () => import('./pages/vendor/vendor.module').then(m => m.VendorModule) },

  { path: 'fulfilment', loadChildren: () => import('./pages/fulfilment/fulfilment.module').then(m => m.FulfilmentModule) },

  { path: 'welcome', loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule) },
  { path: 'order', loadChildren: () => import('./pages/order/order.module').then(m => m.OrderModule) },
  { path: 'mxstats', loadChildren: () => import('./pages/mxstats/mxstats.module').then(m => m.MxstatsModule) }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
