import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router'
import { ProductService } from 'src/app/services/website/product.service';
import { IProduct } from '../product';
@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.scss']
})
export class ProductEditComponent implements OnInit {
  constructor(
    private activedRoute: ActivatedRoute,
    private productServices: ProductService
  ) { }
  product: any;

  ngOnInit(): void {
    this.activedRoute.params.subscribe(params => {
      this.productServices.getProductById(params.id).subscribe(p => {
        this.product = p;
        console.log(this.product)
      })
    })
  }
  handleSubmit(form: NgForm) {
console.log(form.value)
  }
}
