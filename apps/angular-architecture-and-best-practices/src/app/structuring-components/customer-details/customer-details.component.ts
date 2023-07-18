import { Component, Input } from '@angular/core';
import { Customer } from '../../shared/interfaces';

@Component({
  selector: 'nx-angular-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
})
export class CustomerDetailsComponent {
  
  @Input()
  customer!: Customer;

  constructor() {
    console.log('customer', this.customer)
  }
}
