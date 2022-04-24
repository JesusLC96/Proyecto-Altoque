import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { LoginComponent } from './login/login.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { AppComponent } from './app.component';
import { CuentaComponent } from './cuenta/cuenta.component';
import { RegistroComponent } from './registro/registro.component';

const routes: Routes = [
  {path: 'inicio', component: InicioComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'servicios', component: ServiciosComponent},
  {path: 'login', component: LoginComponent},
  {path: 'cuenta', component: CuentaComponent},
  {path: 'registro', component: RegistroComponent},
  {path: '',redirectTo: 'inicio', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
