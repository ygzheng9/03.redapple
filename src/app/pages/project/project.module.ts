import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconsProviderModule } from '../../icons-provider.module';

// add: "node_modules/echarts/dist/echarts.js" to angular.json scripts
import {NgxEchartsModule} from 'ngx-echarts';
import 'echarts/map/js/china.js';

import {ProjectRoutingModule} from "./project-routing.module";

import { ProjectComponent } from './project.component';
import { DetailComponent } from './detail/detail.component';
import { OverviewComponent } from './overview/overview.component';
import { ContractComponent } from './contract/contract.component';
import { FundComponent } from './fund/fund.component';
import { MaterialComponent } from './material/material.component';
import { PlanComponent } from './plan/plan.component';
import { CategoryComponent } from './category/category.component';
import { ResourceComponent } from './resource/resource.component';

@NgModule({
  declarations: [ProjectComponent, DetailComponent, OverviewComponent, ContractComponent, FundComponent, MaterialComponent, PlanComponent, CategoryComponent, ResourceComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule,
    IconsProviderModule,
    NgZorroAntdModule,
    NgxEchartsModule,
    ProjectRoutingModule
  ]
})
export class ProjectModule { }
