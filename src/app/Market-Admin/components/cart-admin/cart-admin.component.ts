import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserProductService } from 'src/app/Market-User/services/user-product.service';

import { CartAdminService } from '../../services/cart-admin.service';

@Component({
  selector: 'app-cart-admin',
  templateUrl: './cart-admin.component.html',
  styleUrls: ['./cart-admin.component.css'],
})
export class CartAdminComponent {
  carts: any[] = [];
  cartProducts: any[] = [];
  form!: FormGroup;
  details: any;
  total: any = 0;
  constructor(
    private cartservice: CartAdminService,
    private FormBuilder: FormBuilder,
    private productservice: UserProductService
  ) {}
  ngOnInit(): void {
    this.form = this.FormBuilder.group({
      start: [''],
      end: [''],
    });
    this.apply()
  }
  getcarts() {
    this.cartservice.getallCarts().subscribe((res: any) => {
      this.carts = res;
      console.log(this.carts);
    });
  }
  apply() {
    let date = this.form.value;
    this.cartservice.getallCarts(date).subscribe((res: any) => {
      console.log(this.carts);
      this.carts = res;
      console.log(this.form.value);
    });
  }
  deletCart(id: number) {
    this.cartservice.deletCart(id).subscribe((res) => {
      alert('product is deleted');
      this.getcarts();
    });
  }

  view(index: number) {
    this.cartProducts=[]
    this.details = this.carts[index];
    for (let x in this.details.products) {
      this.productservice
        .getproductById(this.details.products[x].productId)
        .subscribe((res: any) => {
          this.cartProducts.push({
            item: res,
            quantity: this.details.products[x].quantity,
          });
        });
    }
    console.log(this.details);
  }
}
