import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { UserProductService } from 'src/app/Market-User/services/user-product.service';
import { Product } from 'src/app/models/productsModel';
import { ProductAdminService } from '../../services/product-admin.service';

@Component({
  selector: 'app-product-admin',
  templateUrl: './product-admin.component.html',
  styleUrls: ['./product-admin.component.css'],
})
export class ProductAdminComponent {
  products: Product[] = [];
  categories: string[] = [];
  basimage: any;
  formAdmin!: FormGroup;
  showspner:boolean=false
  constructor(
    private service: UserProductService,
    private formbuilder: FormBuilder,
    private productserviec: ProductAdminService
  ) {}
  ngOnInit() {
    this.formAdmin = this.formbuilder.group({
      title: [''],
      price: [''],
      description: [''],
      image: [''],
      category: [''],
    });

    this.getproduct();
    this.getcategories();
  }
  getproduct() {
    this.showspner=true
    this.service.getAllProduct().subscribe((e: any) => {
      this.showspner=false
      this.products = e;
      console.log(e);
    });
  }
  update(item: any) {
    this.formAdmin.get('title')?.setValue(item.title);
    this.formAdmin.get('price')?.setValue(item.price);
    this.formAdmin.get('description')?.setValue(item.description);
    this.formAdmin.get('category')?.setValue(item.category);
    this.formAdmin.get('image')?.setValue(item.image);
    this.basimage = item.image;
  }
  getselectedcategory(event: any) {
    this.formAdmin.get('category')?.setValue(event.target.value);
  }
  createproduct() {
    this.formAdmin.reset();
  }
  getcategories() {
    this.service.getAllcategories().subscribe((e: any) => {
      console.log(e);
      this.categories = e;
    });
  }
  getpathimage(event: any) {
    let file = event.target.files[0];
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      this.basimage = reader.result;
      this.formAdmin.get('image')?.setValue(this.basimage);
      console.log(this.basimage);
    };
  }
  addproduct() {
    let model = this.formAdmin.value;
    this.productserviec.createproduct(model).subscribe((res) => {
      var ref = document.getElementById('cancel');
      ref?.click();
      this.formAdmin.reset();
    });
  }
}
