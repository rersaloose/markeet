import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductAdminComponent } from './components/product-admin/product-admin.component';
import { CartAdminComponent } from './components/cart-admin/cart-admin.component';
import { SharedModule } from '../shared/shared.module';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductAdminComponent,
    CartAdminComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    SharedModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  exports:[
    ProductAdminComponent,
    CartAdminComponent,ReactiveFormsModule,
  ]
})
export class ProductAModule { }
