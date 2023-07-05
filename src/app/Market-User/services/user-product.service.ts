import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class UserProductService {
  constructor(private http: HttpClient) {}

  getAllProduct() {
    return this.http.get(environment.basUrl + 'products');
  }

  getAllcategories() {
    return this.http.get(environment.basUrl + 'products/categories');
  }

  getproductBycatgeroies(keyword: string) {
    return this.http.get('https://fakestoreapi.com/products/category/'+keyword);
  }
  getproductById(id:any){
    return this.http.get(environment.basUrl+'products/'+id)
  }
}
 