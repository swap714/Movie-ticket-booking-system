import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../classesEntity/User';

@Injectable({
  providedIn: 'root'
})
export class BaseService {



  apiUrl='http://localhost:8082/'
  constructor(private http:HttpClient) { }

  postRegister(userForm:any):Observable<any>{
    console.log(JSON.stringify(userForm));
    return this.http.post<any>("http://localhost:8082/register",userForm);
  }



  getRegister():Observable<User>{
    return this.http.get<User>(this.apiUrl+'GetRegister');
  }
  deleteRegister(userId:any):Observable<any>{
    return this.http.delete(this.apiUrl+'DeleteRegister'+userId);
  }


  //User Login :
  postLogin(userLogin:any):Observable<any>{
    return this.http.post<any>('http://localhost:8082/login',userLogin);
  }

  //City location :
  getCities():Observable<any>{
    return this.http.get<any>("http://localhost:8082/city");
  }

  // getZipcode():Observable<any>{
  //   return this.http.get<any>()

  // }

}











