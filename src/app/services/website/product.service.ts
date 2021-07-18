import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';
import { IProduct } from 'src/app/components/website/product/product';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  API: string = 'https://hungpvph12160-pake-user.herokuapp.com/products';
  constructor(private http: HttpClient) { }
  getProductList(): Observable<IProduct[]> {
    // return of(this.products).pipe(delay(500));
    return this.http.get<IProduct[]>(this.API)
  }

  deleteProduct(id: number): Observable<IProduct> {
    return this.http.delete<IProduct>(`${this.API}/${id}`)
  }

  getProductById(id: number): Observable<IProduct> {
    return this.http.get<IProduct>(`${this.API}/${id}`);
  }
}
