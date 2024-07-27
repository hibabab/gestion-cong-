import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeComponent } from './employee.component';
import { ListeEmployeComponent } from './liste-employe/liste-employe.component';


const routes: Routes = [
  {
    path: '', component: EmployeeComponent,
    children: [
      { path: '', component: ListeEmployeComponent },
  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
