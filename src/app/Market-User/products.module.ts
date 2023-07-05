import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AllProductComponent } from './Components/all-product/all-product.component';
import { ProductDetailsComponent } from './Components/product-details/product-details.component';
import { BrowserModule } from '@angular/platform-browser';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './Components/product/product.component';
import { RouterModule } from '@angular/router';
import { FormsModule,  } from '@angular/forms';



@NgModule({
  declarations: [
    AllProductComponent,
    ProductDetailsComponent,
    ProductComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    RouterModule,
    FormsModule,
   
    
  ],
  exports:[
    AllProductComponent,
    ProductDetailsComponent,
      ProductComponent
  ]
})
export class ProductsModule { }
