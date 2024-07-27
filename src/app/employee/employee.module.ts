import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { ListeEmployeComponent } from './liste-employe/liste-employe.component';
import { NavbarComponent } from './navbar/navbar.component';



@NgModule({
  declarations: [
    EmployeeComponent,
    ListeEmployeComponent,
    NavbarComponent,
    
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule
  ]
})
export class EmployeeModule { }
