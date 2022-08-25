import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductService ) { }

  ngOnInit(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res;
      this.products.forEach(p => {
        Object.assign(p, {amount: 1});
    })
    });
  }

}
