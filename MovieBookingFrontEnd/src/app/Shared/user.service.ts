import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../classesEntity/User';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class UserService
{

  constructor(private baseService:BaseService) { }

  postRegistration(userForm:User){
   return this.baseService.postRegister(userForm);
  }


  getRegistration(){
    return this.baseService.getRegister();
  }

  deleteRegistration(userid:any)
  {
    return this.baseService.deleteRegister(userid);
  }
}
