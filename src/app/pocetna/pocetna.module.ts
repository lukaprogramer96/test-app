import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PocetnaRoutingModule } from './pocetna-routing.module';
import { PocetnaComponent } from './pocetna/pocetna.component';


@NgModule({
  declarations: [
    PocetnaComponent
  ],
  imports: [
    CommonModule,
    PocetnaRoutingModule
  ]
})
export class PocetnaModule { }
