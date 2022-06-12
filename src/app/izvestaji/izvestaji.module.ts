import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IzvestajiRoutingModule } from './izvestaji-routing.module';
import { IzvestajiComponent } from './izvestaji/izvestaji.component';


@NgModule({
  declarations: [
    IzvestajiComponent
  ],
  imports: [
    CommonModule,
    IzvestajiRoutingModule
  ]
})
export class IzvestajiModule { }
