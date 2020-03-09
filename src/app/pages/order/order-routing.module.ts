import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OrderComponent} from "./order.component";
import {QuotationComponent} from "./quotation/quotation.component";
import {HomeComponent} from "./home/home.component";
import {ListComponent} from "./list/list.component";

const routes: Routes = [
  {
    path: '',
    component: OrderComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'list', component: ListComponent },
      { path: 'quotation', component: QuotationComponent }
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrderRoutingModule { }
