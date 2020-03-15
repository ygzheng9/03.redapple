import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from "../welcome/welcome.component";
import {OpenComponent} from "./open/open.component";
import {CloseComponent} from "./close/close.component";


const routes: Routes = [
  { path: '', component: OpenComponent },
  { path: 'open', component: OpenComponent },
  { path: 'close', component: CloseComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TodoRoutingModule { }
