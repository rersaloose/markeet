import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CartAdminService {
  constructor(private http: HttpClient) {}

  getallCarts(param?: any) {
    let params = new HttpParams();
    params = params.append('startdate', param?.start).append('enddate', param?.end);
    return this.http.get(environment.basUrl + 'carts', { params: params });
  }
  deletCart(id: number) {
    return this.http.delete(environment.basUrl + 'carts/' + id);
  }
}
