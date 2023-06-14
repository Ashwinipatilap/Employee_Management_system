import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from './employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private basicUrl = "http://localhost:9090/employee"

  constructor(private _http:HttpClient) { }

  AddEmployee(emp:any):Observable<any>{
    return this._http.post<any>(this.basicUrl+"/addEmp",emp);
  }
  getEmployee():Observable<any>{
    return this._http.get<any>(this.basicUrl+"/getEmp");
  }
  getEmployeeById(id:number):Observable<Employee>{
    return this._http.get<Employee>(this.basicUrl+"/getEmpById/"+id);
  }

  editEmployee(id:any,emp:any):Observable<any>{
   
    return this._http.put<any>(this.basicUrl+"/editEmp/"+id,emp);
  }
}
