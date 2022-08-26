import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartItems: Product[] = [];
  productSource = new BehaviorSubject<any>([]);

  constructor() { }

  getProducts(): Observable<any> {
    return this.productSource.asObservable();
  }

  addToCart(product: Product) {
    this.cartItems.push(product);
    this.productSource.next(this.cartItems);
  }

  deleteFromCart(product: Product) {
    this.cartItems.map((p, index) => {
      if(product.id === p.id) {
        this.cartItems.splice(index, 1);
      }
    })
  }

  calculateTotalPrice(): number {
    let totalPrice = 0;
    this.cartItems.forEach(p => {
      totalPrice += (p.amount * p.price);
    })
    return Number(totalPrice.toFixed(2));
  }

}
