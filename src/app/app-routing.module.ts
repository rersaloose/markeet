import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/Components/cart/cart.component';
import { CartAdminComponent } from './Market-Admin/components/cart-admin/cart-admin.component';
import { ProductAdminComponent } from './Market-Admin/components/product-admin/product-admin.component';
import { AllProductComponent } from './Market-User/Components/all-product/all-product.component';
import { ProductDetailsComponent } from './Market-User/Components/product-details/product-details.component';
import { ProductComponent } from './Market-User/Components/product/product.component';

const routes: Routes = [
  {path:"product",component:AllProductComponent},
  {path:"details/:id",component:ProductDetailsComponent},
  {path:"cart",component:CartAdminComponent},
  {path:"**",redirectTo:"cart",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
