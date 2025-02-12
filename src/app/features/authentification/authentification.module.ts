import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthentificationRoutingModule } from './authentification-routing.module';
import {LoginComponent} from './login/login.component';

const COMPONENTS = [LoginComponent]


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AuthentificationRoutingModule
  ]
})
export class AuthentificationModule { }
