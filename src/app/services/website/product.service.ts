import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IProduct } from 'src/app/components/website/product/product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  products: IProduct[] = [];
  API: string = 'https://hungpvph12160-pake-user.herokuapp.com/products';
  constructor(private http: HttpClient) { }
  getProductList(): Observable<IProduct[]> {
    // return of(this.products).pipe(delay(500));
    return this.http.get<IProduct[]>(this.API)
  }

  getProductById(id: number): Observable<IProduct> {
    // id = parseInt(id);
    // const product = this.products.find(p => p.id === id);
    // if (product) {
    //   return of(product).pipe(delay(500));
    // } else {
    //   return throwError(new Error('404 not Found'))
    // }
    return this.http.get<IProduct>(`${this.API}/${id}`);
  }
}
