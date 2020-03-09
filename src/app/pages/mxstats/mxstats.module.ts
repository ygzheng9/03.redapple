import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";

import { NzDatePickerModule } from 'ng-zorro-antd/date-picker';
import {DemoComponent} from "./demo.component";
import {MxstatsRoutingModule} from "./mxstats-routing.module";


@NgModule({
  declarations: [DemoComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    NzDatePickerModule,
    MxstatsRoutingModule
  ],
  exports: [DemoComponent]
})
export class MxstatsModule { }
