import { Component, NgZone, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../../utility/employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employeelist:any[]=[]
  constructor(private fb :FormBuilder,
    private router:Router,
    private empserv:EmployeeService,
    private activatedRoute: ActivatedRoute,
    private ngZone: NgZone) { }

  ngOnInit(): void {
    this.getAllEmployeeList();
  }

  getAllEmployeeList(){
    this.empserv.getEmployee().subscribe(data=>{
      console.log("fetach data successfully")
      this.employeelist=data;
    })
  }

  onEdit(id:any){
    
  
    this.ngZone.run(() => this.router.navigateByUrl('/emp/updateemp/'+id))
    
  }
}
