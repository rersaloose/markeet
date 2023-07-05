import { Component } from '@angular/core';
import { CartService } from '../../Services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cartProducts: any[] = [];
  total: any = 0;
  success:boolean=false
  constructor( private service:CartService) {}
  ngOnInit(): void {
    this.getcartproduct();
  }
  getcartproduct() {
    if ('cart' in localStorage) {
      this.cartProducts = JSON.parse(localStorage.getItem('cart')!);

      console.log(this.cartProducts);
    }
    this.getcarttotalprice();
  }
  getcarttotalprice() {
    this.total = 0;
    for (let x in this.cartProducts) {
      this.total += this.cartProducts[x].item.price * this.cartProducts[x].quantity;
    }
  }
  detctTotal(){
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  minsamount(index: number) {
    this.cartProducts[index].quantity--;
    this.getcarttotalprice();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  addAmount(index: number) {
    this.cartProducts[index].quantity++;
    this.getcarttotalprice();
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  delete(index:number){
    this.cartProducts.splice(index,1)
    this.getcarttotalprice()
    localStorage.setItem('cart', JSON.stringify(this.cartProducts));
  }
  clearCart(){
    this.cartProducts=[]
    localStorage.setItem('cart',JSON.stringify(this.cartProducts))
    this.getcarttotalprice()
  }
addCart(){
  var product=this.cartProducts.map(res=>{
    return {productId:res.item.id,quantity:res.quantity}
  })
  var model={
    userId:5,
    date:new Date,
    products:product
  }
this.service.createNewCart(model).subscribe(e=>{
  this.success=true
})
}
  
}
