import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EncuestaComponent } from './encuesta/encuesta.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NosotrosComponent } from './nosotros/nosotros.component';

const routes: Routes = [
  {path:'', redirectTo:'/navbar', pathMatch:'full'},
  {path:'navbar', component: NavbarComponent},
  {path:'encuesta', component: EncuestaComponent},
  {path:'nosotros', component: NosotrosComponent},
  {path:'estadisticas', component: EstadisticasComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
