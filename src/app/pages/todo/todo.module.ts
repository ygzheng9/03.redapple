import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {FormsModule, ReactiveFormsModule} from "@angular/forms";

import { NgZorroAntdModule } from 'ng-zorro-antd';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { IconsProviderModule } from '../../icons-provider.module';

// add: "node_modules/echarts/dist/echarts.js" to angular.json scripts
import {NgxEchartsModule} from 'ngx-echarts';
import 'echarts/map/js/china.js';

import { TodoRoutingModule } from './todo-routing.module';
import { TodoComponent } from './todo.component';
import { OpenComponent } from './open/open.component';
import { CloseComponent } from './close/close.component';

@NgModule({
  declarations: [TodoComponent, OpenComponent, CloseComponent],
  imports: [
    CommonModule,
    FormsModule,
    NzIconModule,
    IconsProviderModule,
    NgZorroAntdModule,
    NgxEchartsModule,
    TodoRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodoModule { }
