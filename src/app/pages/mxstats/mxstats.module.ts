import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from "@angular/common/http";


import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconsProviderModule } from '../../icons-provider.module';

// add: "node_modules/echarts/dist/echarts.js" to angular.json scripts
import {NgxEchartsModule} from 'ngx-echarts';
import 'echarts/map/js/china.js';

import {MxstatsComponent} from "./mxstats.component";
import {MxstatsRoutingModule} from "./mxstats-routing.module";


@NgModule({
  declarations: [MxstatsComponent],
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,

    NgZorroAntdModule,NzIconModule,IconsProviderModule,NgxEchartsModule,

    MxstatsRoutingModule
  ],
  exports: [MxstatsComponent]
})
export class MxstatsModule { }
