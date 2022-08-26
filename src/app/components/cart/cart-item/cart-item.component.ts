import { CartService } from './../../../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {

  @Input()
  cartItem: Product = new Product;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }

  deleteFromCart(): void {
    this.cartService.deleteFromCart(this.cartItem);
  }

}
