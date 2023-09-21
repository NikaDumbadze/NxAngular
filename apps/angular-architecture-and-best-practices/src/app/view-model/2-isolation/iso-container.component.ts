import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Customer } from '../model';
import { CustomerOrdersDataService } from '../services/customer-orders-data';

/**
 * Master/Detail following the Container/Presenter pattern.
 * Master: customer list
 * Detail: detail about the selected customer ... as a ViewModel
 */

@Component({
  selector: 'nx-angular-iso-container',
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
        <nx-angular-iso-customer-details
          [viewModel]="selectedCustomer"
          (cancel)="cancel()"
          (save)="save($event)"
        ></nx-angular-iso-customer-details>
      </div>
    </div>
  `
})
export class IsoContainerComponent {
  customers$: Observable<Customer[]> = of([]);
  selectedCustomer: Partial<Customer> | null = null;

  constructor(
    private readonly customerOrdersDataService: CustomerOrdersDataService
  ) {
    this.customers$ = customerOrdersDataService.customers$;
  }

  selected(customer: Customer) {
    const viewModel = { ...customer }; // <-- VIEW MODEL. A clone is a ViewModel
    this.selectedCustomer = viewModel;
  }

  addCustomer() {
    this.selectedCustomer = {
      // <-- VIEW MODEL. Any object can be a ViewModel
      photo: 'assets/missing-person.png'
    };
  }

  cancel() {
    this.selectedCustomer = null;
  }

  save(viewModel: Customer) {
    this.selectedCustomer = null;

    viewModel.id == null ?
      this.customerOrdersDataService.addCustomer(viewModel)
      :
      this.customerOrdersDataService.updateCustomer(viewModel);
  }
}