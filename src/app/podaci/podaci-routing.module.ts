import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PodaciComponent } from './podaci/podaci.component';

const routes: Routes = [
  {
    path: '',
    component: PodaciComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PodaciRoutingModule { }
