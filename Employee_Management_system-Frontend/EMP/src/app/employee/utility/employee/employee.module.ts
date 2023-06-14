import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';

import { UpdateEmpComponent } from '../../components/update-emp/update-emp.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EmployeeListComponent } from '../../components/employee-list/employee-list.component';




@NgModule({
  declarations: [
   EmployeeListComponent,
    UpdateEmpComponent
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
  
 
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ]
})
export class EmployeeModule { }
