import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {OrderComponent} from "./order/order.component";
import {MovementComponent} from "./movement/movement.component";
import {InventoryLevelComponent} from "./inventory-level/inventory-level.component";
import {OrderDeliverComponent} from "./order-deliver/order-deliver.component";
import {OrderAllocComponent} from "./order-alloc/order-alloc.component";

const routes: Routes = [
  { path: '', redirectTo: 'order'  },
  { path: 'order', component: OrderComponent  },
  { path: 'completion', component: OrderDeliverComponent  },
  { path: 'alloc', component: OrderAllocComponent  },
  { path: 'movement', component: MovementComponent  },
  { path: 'inventoryLevel', component: InventoryLevelComponent  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FulfilmentRoutingModule { }
