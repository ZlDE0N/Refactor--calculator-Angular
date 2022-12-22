import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HistorialComponent } from './components/historial/historial.component';
import { CuerpoCalcComponent } from './components/cuerpo-calc/cuerpo-calc.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'calc',
    pathMatch: 'full'
  },
  {
    path: 'historial',
    component: HistorialComponent
  },
  {
    path: 'calc',
    component: CuerpoCalcComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
