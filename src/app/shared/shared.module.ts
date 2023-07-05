import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarSharedComponent } from './Components/navbar-shared/navbar-shared.component';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule  } from '@angular/common/http';
import { SpinnerComponent } from './Components/spinner/spinner.component';
import { SelectComponent } from './Components/select/select.component';
import { FormsModule,  ReactiveFormsModule, } from '@angular/forms';



@NgModule({
  declarations: [
    NavbarSharedComponent,
    SpinnerComponent,
    SelectComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule,
    CommonModule,
    HttpClientModule,
   
    FormsModule,
  ],
  exports:[
    NavbarSharedComponent, 
    SpinnerComponent,
    SelectComponent,
    ReactiveFormsModule,
  
  ]
})
export class SharedModule { }
