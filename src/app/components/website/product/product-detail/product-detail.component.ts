import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs/operators';
import { ProductService } from 'src/app/services/website/product.service';
import { IProduct } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss']
})
export class ProductDetailComponent implements OnInit {
  product!: IProduct;
  constructor(
    private activatedRoute: ActivatedRoute,
    private productSevice: ProductService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('id')),
      switchMap(id => this.productSevice.getProductById(Number(id)))
    ).subscribe(p => this.product = p)
  }

}
