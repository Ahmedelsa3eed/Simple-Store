import { ItemDetailsService } from './../services/item-details.service';
import { CartService } from './../services/cart.service';
import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product: Product = new Product;

  constructor(
    private cartService: CartService,
    private itemDetailsService: ItemDetailsService) { }

  ngOnInit(): void {
  }

  sendToDetails(): void {
    this.itemDetailsService.addToDetails(this.product);
  }

  addToCart(): void {
    this.cartService.addToCart(this.product)
  }
  
}
