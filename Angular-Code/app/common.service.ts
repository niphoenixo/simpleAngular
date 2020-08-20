import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private _http:HttpClient) { }
  
  url = "http://localhost:3000/users/"
  getUserList(){
      return this._http.get(this.url);
  }

  insertUser(data){
    data.sale=0
    data.status='inactive'
  	return this._http.post(this.url,data);
  }

  
}
