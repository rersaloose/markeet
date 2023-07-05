import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserProductService } from '../../services/user-product.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  id: any ;
  product: any = {};
  showSpinner: boolean = false;

  constructor(
    private rout: ActivatedRoute,
    private service: UserProductService
  ) { 
    this.id=this.rout.snapshot.paramMap.get('id')
  }
  ngOnInit(): void {
    this.getproductById();
  }

  getproductById() {
    this.showSpinner = true;
    this.service.getproductById(this.id).subscribe((res) => {
      this.showSpinner = false;
      console.log(res);
      this.product = res;
    });
  }
}
