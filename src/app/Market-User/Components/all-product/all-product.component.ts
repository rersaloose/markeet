import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/productsModel';
import { UserProductService } from '../../services/user-product.service';

@Component({
  selector: 'app-all-product',
  templateUrl: './all-product.component.html',
  styleUrls: ['./all-product.component.css'],
})
export class AllProductComponent implements OnInit {
  cartProducts: any[] = [];
  products: Product[] = [];
  categories: string[] = [];
  showSpinner: boolean = false;
  constructor(private service: UserProductService) {}
  ngOnInit(): void {
    this.getproduct();
    this.getcategories();
  }
  getproduct() {
    this.showSpinner = true;
    this.service.getAllProduct().subscribe((e: any) => {
      this.showSpinner = false;
      this.products = e;
      console.log(e);
    });
  }

  getcategories() {
    this.showSpinner = true;
    this.service.getAllcategories().subscribe((e: any) => {
      this.showSpinner = false;
      console.log(e);
      this.categories = e;
    });
  }

  filTerCategories(event: any) {
    this.showSpinner = true;
    let value = event.target.value;
    console.log(value);
    if (value == 'all') {
      this.getproduct();
    } else {
      this.getproductsByCAT(value);
      console.log(value);
    }
  }

  getproductsByCAT(keyword: string) {
    this.showSpinner = true;
    this.service.getproductBycatgeroies(keyword).subscribe((res: any) => {
      console.log(res);
      this.products = res;
      this.showSpinner = false;
    });
  }
  addTocart(event: any) {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);
      var exsit = this.cartProducts.find((item) => item.item.id == event.item.id);
      if (exsit) {
        alert('Product is Already in U Cart');
      } else {
        this.cartProducts.push(event);
        localStorage.setItem('cart', JSON.stringify(this.cartProducts));
      }
    } else {
      this.cartProducts.push(event);
      localStorage.setItem('cart', JSON.stringify(this.cartProducts));
    }
  }
}
