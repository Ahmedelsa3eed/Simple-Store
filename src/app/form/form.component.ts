import { CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../models/Customer';
import { ConfirmationService } from '../services/confirmation.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  customer: Customer = new Customer;

  constructor(
    private cartService: CartService,
    private confirmationService: ConfirmationService,
    private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(): void {
    console.log(this.customer.name);
    this.customer.totalPrice = this.cartService.calculateTotalPrice();
    this.confirmationService.setCustomer(this.customer);
    this.router.navigateByUrl('/confirmation');
  }
}
