import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {MxstatsComponent} from "./mxstats.component";

const routes: Routes = [
  {
    path: '',
    component: MxstatsComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MxstatsRoutingModule { }
