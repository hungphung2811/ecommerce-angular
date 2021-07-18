import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/website/product.service';
import { IProduct } from '../product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent implements OnInit {
  public products: IProduct[] = []
  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.productService.getProductList().subscribe(ps => this.products = ps);
  }

  public onDelete(id: number): void {
    this.productService.deleteProduct(id).subscribe(ps => {
      this.products = this.products.filter(product => product.id != id)
      console.log(this.products)
    })
  }
}
