import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';

import {HttpClientModule} from "@angular/common/http";

import { WelcomeRoutingModule } from './welcome-routing.module';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { WelcomeComponent } from './welcome.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [CommonModule, HttpClientModule, WelcomeRoutingModule, FormsModule, ReactiveFormsModule],
  declarations: [WelcomeComponent, HomeComponent],
  exports: [WelcomeComponent]
})
export class WelcomeModule { }
