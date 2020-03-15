import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconsProviderModule } from '../../icons-provider.module';

// add: "node_modules/echarts/dist/echarts.js" to angular.json scripts
import {NgxEchartsModule} from 'ngx-echarts';
import 'echarts/map/js/china.js';


import { VendorRoutingModule } from './vendor-routing.module';
import { VendorComponent } from './vendor.component';
import { BasicComponent } from './basic/basic.component';
import { PerformaceComponent } from './performace/performace.component';
import { TransactionComponent } from './transaction/transaction.component';


@NgModule({
  declarations: [VendorComponent, BasicComponent, PerformaceComponent, TransactionComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule,
    IconsProviderModule,
    NgZorroAntdModule,
    NgxEchartsModule,
    ReactiveFormsModule,
    VendorRoutingModule
  ]
})
export class VendorModule { }
