import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import { AuthentificationModule } from './features/authentification/authentification.module';
import {LoginComponent} from './features/authentification/login/login.component';
import {Routes} from '@angular/router';


const routes: Routes = [
  {
    path: 't',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
    data: { title: 'Login' },
  },
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    AuthentificationModule,
  ]
})
export class AppModule { }
