import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { UserService } from './shared/services/user/user.service';
import { AuthGuard } from './shared/auth/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { GruposComponent } from './components/grupos/grupos.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PagosComponent } from './components/pagos/pagos.component';
import { NoticiasComponent } from './components/noticias/noticias.component';
import { CambioClaveComponent } from './components/cambio-clave/cambio-clave.component';
import { RevisionGruposComponent } from './components/revision-grupos/revision-grupos.component';
import { ControlVisitantesComponent } from './components/control-visitantes/control-visitantes.component';
import { ControlVisitantesVerificadosComponent } from './components/control-visitantes-verificados/control-visitantes-verificados.component';
import { VerVisitantesGrupoComponent } from './components/ver-visitantes-grupo/ver-visitantes-grupo.component';
import { PuestoGruposComponent } from './components/puesto-grupos/puesto-grupos.component';
import { ValidateComponent } from './components/validate/validate.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReporteRutasComponent } from './components/reportes/reporte-rutas/reporte-rutas.component';
import { ReporteAbonosComponent } from './components/reportes/reporte-abonos/reporte-abonos.component';
import { ReporteRecaudacionComponent } from './components/reportes/reporte-recaudacion/reporte-recaudacion.component';
import { ReporteRecaudacionRutaComponent } from './components/reportes/reporte-recaudacion-ruta/reporte-recaudacion-ruta.component';
import { ReporteVisitantesComponent } from './components/reportes/reporte-visitantes/reporte-visitantes.component';

const AppRouter: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'validate/:token',
    component: ValidateComponent
  },
  {
    path: '',
    redirectTo: 'pagos',
    pathMatch: 'full'
  },
  {
    path: 'home',
    redirectTo: 'pagos',
    canActivate: [AuthGuard]
  },
  {
    path: 'cambio-clave',
    component: CambioClaveComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reportes/rutas',
    component: ReporteRutasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reportes/abonos',
    component: ReporteAbonosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reportes/recaudacion',
    component: ReporteRecaudacionComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reportes/recaudacion-ruta',
    component: ReporteRecaudacionRutaComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'reportes/visitantes',
    component: ReporteVisitantesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'grupos',
    component: GruposComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'pagos',
    component: PagosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'noticias',
    component: NoticiasComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'puesto/revision-grupos',
    component: RevisionGruposComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'puesto/grupos',
    component: PuestoGruposComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'control-visitantes/:codigo',
    component: ControlVisitantesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'control-visitantes-verificados',
    component: ControlVisitantesVerificadosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'ver-visitantes-grupo/:codigo',
    component: VerVisitantesGrupoComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    GruposComponent,
    NavbarComponent,
    BreadcrumbsComponent,
    PagosComponent,
    NoticiasComponent,
    CambioClaveComponent,
    RevisionGruposComponent,
    ControlVisitantesComponent,
    ControlVisitantesVerificadosComponent,
    VerVisitantesGrupoComponent,
    PuestoGruposComponent,
    ValidateComponent,
    ReporteRutasComponent,
    ReporteAbonosComponent,
    ReporteRecaudacionComponent,
    ReporteRecaudacionRutaComponent,
    ReporteVisitantesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    RouterModule.forRoot(AppRouter, { enableTracing: false, useHash: true })
  ],
  providers: [AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
