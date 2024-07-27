import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { AuthentificationRoutingModule } from './authentification-routing.module';
import { AuthentificationComponent } from './authentification.component';
import { LoginComponent } from './login/login.component';
import { InscrireComponent } from './inscrire/inscrire.component';


@NgModule({
  declarations: [
    AuthentificationComponent,
    LoginComponent,
    InscrireComponent
  ],
  imports: [
    CommonModule,
    AuthentificationRoutingModule,
    FormsModule
  ]
})
export class AuthentificationModule { }
