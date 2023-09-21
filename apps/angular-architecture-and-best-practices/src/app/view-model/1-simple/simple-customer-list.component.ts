import { Component, EventEmitter, Input, Output } from '@angular/core'
import { Customer } from "../model";

@Component({
  selector: 'nx-angular-simple-customer-list',
  styleUrls: ['../view-model.scss'],
  template: `
    <h4>Customers</h4>

    <table class="table table-striped nav">
      <tr *ngFor="let customer of customers" (click)="selectCustomer(customer)">
        <td>{{ customer | fullName }}</td>
      </tr>
    </table>
  `
})
export class SimpleCustomerListComponent {
  @Input() customers: Customer[] = [];
  @Output() customerSelected = new EventEmitter<Customer>();

  selectCustomer(customer: Customer) {
    this.customerSelected.emit(customer);
  }
} 