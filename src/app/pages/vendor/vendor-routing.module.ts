import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {BasicComponent} from "./basic/basic.component";
import {PerformaceComponent} from "./performace/performace.component";
import {TransactionComponent} from "./transaction/transaction.component";


const routes: Routes = [
  { path: '', component: BasicComponent },
  { path: 'basic', component: BasicComponent },
  { path: 'performance', component: PerformaceComponent },
  { path: 'transaction', component: TransactionComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VendorRoutingModule { }
