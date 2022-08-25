import { CartService } from './../services/cart.service';
import { Product } from './../models/Product';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: Product[] = [];
  totalPrice: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts().subscribe(res => {
      this.cartItems = res;
      this.totalPrice = this.cartService.calculateTotalPrice();
    })
  }

  addProduct(product: Product) {
    this.cartItems.push(product)
  }

  submitForm(): void {
    
  }

}
