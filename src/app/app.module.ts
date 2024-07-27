import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeDemandeComponent } from './demande_employee/liste-demande/liste-demande.component';
import { MenuComponent } from "./menu/menu.component";





@NgModule({
  declarations: [
    AppComponent,
    ListeDemandeComponent,

  
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuComponent
],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
