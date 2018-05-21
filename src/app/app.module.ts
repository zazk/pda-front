import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { UserService } from './shared/services/user/user.service';
import { AuthGuard } from './shared/auth/auth.guard';
import { LoginComponent } from './login/login.component';

const AppRouter: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(AppRouter, {enableTracing: true} )
  ],
  providers: [ AuthGuard, UserService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
