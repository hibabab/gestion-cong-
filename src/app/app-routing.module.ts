// app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
 
    { path: 'demande', loadChildren: () => import('./demande/demande.module').then(m => m.DemandeModule) },
    { path: '', redirectTo: '/employee', pathMatch: 'full' },
 
    { path: 'demande_employee', loadChildren: () => import('./demande-emloyee/demande-emloyee.module').then(m => m.DemandeEmloyeeModule) }
  ];
  


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
