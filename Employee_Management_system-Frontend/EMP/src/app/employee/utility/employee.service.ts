import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private basicUrl = "http://localhost:9090/employee"

  constructor(private _http:HttpClient) { }

  AddEmployee(emp:any):Observable<any>{
    return this._http.post<any>(this.basicUrl+"/addEmp",emp);
  }
  
}
