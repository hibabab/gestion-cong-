import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DemandeComponent } from './demande.component';
import { AjoutDemandeComponent } from './ajout-demande/ajout-demande.component';
import { CalandrierComponent } from './calandrier/calandrier.component';

const routes: Routes = [
  {
    path: '', component: DemandeComponent,
    children: [
      { path: 'ajout_demande', component: AjoutDemandeComponent }, // Route enfant sous DemandeComponent
      { path: 'calandrier', component: CalandrierComponent } // Route enfant sous DemandeComponent
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemandeRoutingModule { }
