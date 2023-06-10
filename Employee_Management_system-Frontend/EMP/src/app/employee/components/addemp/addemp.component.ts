import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeService } from '../../utility/employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-addemp',
  templateUrl: './addemp.component.html',
  styleUrls: ['./addemp.component.css']
})
export class AddempComponent implements OnInit {

  employeeForm : FormGroup;
  submitted=false;
  invalidLogin=false;
  
  constructor(
    private fb :FormBuilder,
    private router:Router,
    private empserv:EmployeeService

  ) { 
    this.employeeForm=this.fb.group({
      firstName:[''],
      lastName:[''],
      emailId :[''],
      contactNumber:['']

    })
  }

  get f(){return this.employeeForm.controls;}

  onAdd(emp:FormGroup){
    console.log("enter into ethos")
    this.submitted=true;
    if(this.employeeForm.invalid)
    {
      return;
    }
    this.empserv.AddEmployee(emp.value).subscribe(data=>{
      console.log("emp added succefully"+data);
    },
    HttpErrorResponse=>{
      if(HttpErrorResponse.status==401)
      console.log("somethingwent wrong");
    }
    )

  }
  ngOnInit(): void {
  }

}
