import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {ProjectComponent} from "./project.component";
import {OverviewComponent} from "./overview/overview.component";
import {DetailComponent} from "./detail/detail.component";
import {CategoryComponent} from "./category/category.component";

const routes: Routes = [
  {
    path: '',
    component: ProjectComponent,
    children: [
      { path: 'overview', component: OverviewComponent },
      { path: 'detail', component: DetailComponent },
      { path: 'category', component: CategoryComponent }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectRoutingModule { }
