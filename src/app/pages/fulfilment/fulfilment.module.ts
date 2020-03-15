import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from "@angular/common/http";


import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconsProviderModule } from '../../icons-provider.module';

// add: "node_modules/echarts/dist/echarts.js" to angular.json scripts
import { NgxEchartsModule } from 'ngx-echarts';
import 'echarts/map/js/china.js';

import { OrderComponent } from './order/order.component';


import { FulfilmentRoutingModule } from "./fulfilment-routing.module";
import { MovementComponent } from './movement/movement.component';
import { InventoryLevelComponent } from './inventory-level/inventory-level.component';
import { OrderDeliverComponent } from './order-deliver/order-deliver.component';
import { OrderAllocComponent } from './order-alloc/order-alloc.component';


@NgModule({
  declarations: [OrderComponent, MovementComponent, InventoryLevelComponent, OrderDeliverComponent, OrderAllocComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    NgZorroAntdModule,NzIconModule,IconsProviderModule,NgxEchartsModule,

    FulfilmentRoutingModule
  ]
})
export class FulfilmentModule { }
