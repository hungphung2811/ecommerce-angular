import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public products: { id: number, name: string, quantity: number, price: number }[] = [
    {
      id: 1,
      name: 'product 1',
      quantity: 12,
      price: 100
    },
    {
      id: 2,
      name: 'product 2',
      quantity: 5,
      price: 100
    },
    {
      id: 3,
      name: 'product 3',
      quantity: 11,
      price: 100
    }

  ]

  public getValue(form: NgForm) {
    console.log(form.value);
    form.resetForm();
  }
}
