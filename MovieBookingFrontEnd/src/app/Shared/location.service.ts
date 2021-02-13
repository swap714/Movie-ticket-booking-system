import { BaseService } from './base.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocationService {


  constructor(private _baseService : BaseService) { }

  getCity(){
    return this._baseService.getCities();
   }


}
