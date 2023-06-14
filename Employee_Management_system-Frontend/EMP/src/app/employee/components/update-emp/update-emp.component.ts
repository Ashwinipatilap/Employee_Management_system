import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../utility/employee.service';
import { Employee } from '../../utility/employee';

@Component({
  selector: 'app-update-emp',
  templateUrl: './update-emp.component.html',
  styleUrls: ['./update-emp.component.css']
})
export class UpdateEmpComponent implements OnInit {
employee:Employee=new Employee();
  empid: number=0;
  constructor( private fb :FormBuilder,

    private empserv:EmployeeService,
    private routr :ActivatedRoute,private rout:Router) {
   
    
   }

  ngOnInit(): void {
    this.empid=this.routr.snapshot.params['id'];
   this.empserv.getEmployeeById(this.empid).subscribe(data=>{
    console.log(data);
    this.employee=data;

   },error=>console.log(error)
   );
    
  }
  
  onUpdate(){
    this.empserv.editEmployee(this.empid,this.employee).subscribe(data=>{
      console.log(data);
      this.rout.navigate(['emp/emplist'])
    })
    
  }

 
}
