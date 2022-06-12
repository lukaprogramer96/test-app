import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pocetna/pocetna.module').then(m => m.PocetnaModule)
  },
  {
    path: 'podaci',
    loadChildren: () => import('./podaci/podaci.module').then(m => m.PodaciModule)
  },
  {
    path: 'izvestaji',
    loadChildren: () => import('./izvestaji/izvestaji.module').then(m => m.IzvestajiModule)
  },
  {
    path: 'mapa',
    loadChildren: () => import('./mapa/mapa.module').then(m => m.MapaModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
