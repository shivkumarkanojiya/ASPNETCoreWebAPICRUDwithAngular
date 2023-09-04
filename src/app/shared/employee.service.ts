import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Designation, Employee } from './employee.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private myhttp:HttpClient) { }

  employeeUrl:string='https://localhost:44357/api/Employee';
  designationUrl:string='https://localhost:44357/api/Designation';
  listEmployee:Employee[]=[];
  listDesignation:Designation[]=[];

  employeeData:Employee=new Employee();//For Post Data / Insert Data
//Save data
  saveEmployee()
  {
   return this.myhttp.post(this.employeeUrl,this.employeeData);
  }
  //Update data
  UpdateEmployee()
  {
   return this.myhttp.put(`${this.employeeUrl}/${this.employeeData.id}`,this.employeeData);
  }
//Get list data
  getEmployee():Observable<Employee[]>
  {
    return this.myhttp.get<Employee[]>(this.employeeUrl);
  }
  //Get list data designation
  getDesignation():Observable<Designation[]>
  {
    return this.myhttp.get<Designation[]>(this.designationUrl);
  }
  //Delete
  deleteEmployee(id:number)
  {
    return this.myhttp.delete(`${this.employeeUrl}/${id}`);
  }
}
