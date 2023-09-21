import { Component } from "@angular/core";
import { Observable, of } from "rxjs";

import { Customer } from "../model";
import { CustomerOrdersDataService } from "../services/customer-orders-data";

/**
 * Master/Detail following the Container/Presenter pattern
 * Master: customer list
 * Detail: detail about the selected customer
 */
@Component({
  selector: 'nx-angular-simple-container',
  styleUrls: ['../view-model.scss'],
  template: `
  <button (click)="addCustomer()" class="btn btn-primary button-row">Add Customer</button>

  <div *ngIf="customers$ | async as customers" class="row">
    <!-- Customer List -->
    <div class="col-md-2">
      <nx-angular-simple-customer-list
        [customers]="customers"
        (customerSelected)="selected($event)"
      ></nx-angular-simple-customer-list>
    </div>

    <!-- Customer Details -->
    <div class="col-md-5">
      <nx-angular-simple-customer-details [customer]="selectedCustomer"></nx-angular-simple-customer-details>
    </div>
  </div>
`
})
export class SimpleContainerComponent {
  customers$: Observable<Customer[]> = of([])
  selectedCustomer: Customer | null = null;

  constructor(
    private readonly customerOrdersDataService: CustomerOrdersDataService
  ) {
    this.customers$ = this.customerOrdersDataService.customers$;
  }

  selected(customer: Customer) {
    this.selectedCustomer = customer; // <-- MODEL ENTITY
  }

  addCustomer() {
    this.customerOrdersDataService.addCustomer();
  }
}  
