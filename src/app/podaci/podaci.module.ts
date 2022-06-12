import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PodaciRoutingModule } from './podaci-routing.module';
import { PodaciComponent } from './podaci/podaci.component';


@NgModule({
  declarations: [
    PodaciComponent
  ],
  imports: [
    CommonModule,
    PodaciRoutingModule
  ]
})
export class PodaciModule { }
