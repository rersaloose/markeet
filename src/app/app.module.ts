import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { ProductsModule } from './Market-User/products.module';
import { CartModule } from './cart/cart.module';
import { RouterModule } from '@angular/router';
import { ProductAModule } from './Market-Admin/product-a.module';
import { LoginComponent } from './login/login.component';

;

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
  
  ],
  imports: [
    BrowserModule,
    CartModule,
    CommonModule,
    AppRoutingModule,
    SharedModule,
    BrowserAnimationsModule,
    ProductsModule,
    RouterModule,
    ProductAModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
