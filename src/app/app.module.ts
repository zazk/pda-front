import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { UserService } from "./shared/services/user/user.service";
import { AuthGuard } from "./shared/auth/auth.guard";
import { LoginComponent } from "./login/login.component";
import { IngresoVisitantesComponent } from "./ingreso-visitantes/ingreso-visitantes.component";
import { ConfirmarVisitantesComponent } from "./confirmar-visitantes/confirmar-visitantes.component";
import { ResumenVisitantesComponent } from "./resumen-visitantes/resumen-visitantes.component";
import { GruposComponent } from "./grupos/grupos.component";
import { NavbarComponent } from "./shared/navbar/navbar.component";
import { BreadcrumbsComponent } from "./shared/breadcrumbs/breadcrumbs.component";
import { PagosComponent } from "./pagos/pagos.component";
import { NoticiasComponent } from "./noticias/noticias.component";

const AppRouter: Routes = [
  {
    path: "login",
    component: LoginComponent
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "ingreso-visitantes",
    component: IngresoVisitantesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "confirmar-visitantes",
    component: ConfirmarVisitantesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "resumen-visitantes",
    component: ResumenVisitantesComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "grupos",
    component: GruposComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "pagos",
    component: PagosComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "noticias",
    component: NoticiasComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    IngresoVisitantesComponent,
    ConfirmarVisitantesComponent,
    ResumenVisitantesComponent,
    GruposComponent,
    NavbarComponent,
    BreadcrumbsComponent,
    PagosComponent,
    NoticiasComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(AppRouter, { enableTracing: true })
  ],
  providers: [AuthGuard, UserService],
  bootstrap: [AppComponent]
})
export class AppModule {}
