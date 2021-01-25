import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainRoutingModule } from './main-routing.module';
import { MainComponent } from './main.component';
import { ListComponent } from './components/list/list.component';
import { NavComponent } from './components/nav/nav.component';


@NgModule({
  declarations: [MainComponent, ListComponent, NavComponent],
  imports: [
    CommonModule,
    MainRoutingModule
  ]
})
export class MainModule { }
