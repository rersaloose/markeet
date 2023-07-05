import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './Components/cart/cart.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { ProductsModule } from '../Market-User/products.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    RouterModule,
    ProductsModule,
    FormsModule
  ],
  exports:[
    CartComponent,
   
  ]
})
export class CartModule { }
