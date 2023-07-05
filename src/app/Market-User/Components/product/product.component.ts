import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/productsModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
 @Input() data!:Product
 @Output() item = new EventEmitter();
 addbutton:boolean=false;
 amount:number=0;
constructor(){}

add(){
  this.item.emit({item:this.data,quantity:this.amount})
}
}
