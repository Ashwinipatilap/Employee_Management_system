import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UpdateEmpComponent } from '../../components/update-emp/update-emp.component';
import { EmployeeListComponent } from '../../components/employee-list/employee-list.component';
import { DeleteEmpComponent } from '../../components/delete-emp/delete-emp.component';

const routes: Routes = [
  {path:"updateemp/:id",component:UpdateEmpComponent},
  {path:"emplist",component:EmployeeListComponent},
  {path:'deleteemp',component:DeleteEmpComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeRoutingModule { }
