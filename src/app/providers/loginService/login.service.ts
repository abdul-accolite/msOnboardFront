import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http:HttpClient) { }
addUser(empId:number,name:string,email:string,profilepic:string,idToken:string,designation:String,permissions:String){
       return this.http.post('forum/home/addEmployee',{
         emp_id:empId,
         fullName:name,
         email:email,
         profilepic:profilepic,
         idToken:idToken,
         designation:designation,
         permissions:permissions
       })
}
}

