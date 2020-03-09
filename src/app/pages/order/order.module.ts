import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { OrderRoutingModule } from './order-routing.module';

import { OrderComponent } from './order.component';
import { QuotationComponent } from './quotation/quotation.component';
import { HomeComponent } from './home/home.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [OrderComponent, QuotationComponent, HomeComponent, ListComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    OrderRoutingModule
  ],
  exports: [OrderComponent]
})
export class OrderModule { }
