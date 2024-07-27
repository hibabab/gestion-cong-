import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemandeRoutingModule } from './demande-routing.module';
import { DemandeComponent } from './demande.component';
import { AjoutDemandeComponent } from './ajout-demande/ajout-demande.component';
import { CalandrierComponent } from './calandrier/calandrier.component';

import { FullCalendarModule } from '@fullcalendar/angular';


import { SoldeComponent } from './solde/solde.component';
// Enregistre les plugins avec FullCalendar


@NgModule({
  declarations: [
    DemandeComponent,
    AjoutDemandeComponent,
    CalandrierComponent,
    SoldeComponent,
    
  ],
  imports: [
    CommonModule,
    DemandeRoutingModule,
    FormsModule,
    
  
    FullCalendarModule // Enreg,
    
  
  ]
})
export class DemandeModule { }
