import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IzvestajiComponent } from './izvestaji/izvestaji.component';

const routes: Routes = [
  {
    path: '',
    component: IzvestajiComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IzvestajiRoutingModule { }
