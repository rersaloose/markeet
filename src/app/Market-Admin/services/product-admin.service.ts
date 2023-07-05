import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProductAdminService {

  constructor(private http:HttpClient) { }
  createproduct(modal:any){
return  this.http.post(environment.basUrl+'products',modal)

  }
}
