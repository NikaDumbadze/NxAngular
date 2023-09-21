import { Component } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { CustomerOrdersDataService } from '../services/customer-orders-data';
import { Customer } from '../model';
import { CustomerVmPlus } from './customer-vm-plus';

/**
 * Master/Detail following the Container/Presenter pattern.
 * Master: customer list of Customer ViewModels
 * Detail: detail about a selected Customer ViewModel
 */
@Component({
  selector: 'nx-angular-vm-plus-container',
  styleUrls: ['../view-model.scss'],
  template: `
    <!-- Notice that there are no more event bindings! -->
    <button (click)="addCustomer()" class="btn btn-primary button-row">Add Customer</button>

    <div *ngIf="vms$ | async as vms" class="row">
      <!-- Customer List -->
      <div class="col-md-2">
        <nx-angular-vm-plus-customer-list [vms]="vms"></nx-angular-vm-plus-customer-list>
      </div>

      <!-- Customer Details -->
      <div class="col-md-5">
        <nx-angular-vm-plus-customer-details [vm]="selectedVm"></nx-angular-vm-plus-customer-details>
      </div>
    </div>
  `
})
export class VmPlusContainerComponent {
  vms$!: Observable<CustomerVmPlus[]>;
  selectedVm: CustomerVmPlus | null = null;

  constructor(
    private readonly customerOrdersDataService: CustomerOrdersDataService
  ) {
    this.createVm$()
  }

  /**Create observable of Customer ViewModels from cached customers */
  createVm$() {
    this.vms$ = this.customerOrdersDataService.customers$.pipe(
      map(customers => customers.map(customer => <CustomerVmPlus>this.toCustomerVmPlus(customer)))
    );
  }

  addCustomer() {
    this.selectedVm = null;
  }

  cancel() {
    this.selectedVm = null;
  }

  save(vm: CustomerVmPlus) {
    this.selectedVm = null;
    const customer = vm.toCustomer();

    customer.id == 0 ?
      this.customerOrdersDataService.addCustomer(customer)
      :
      this.customerOrdersDataService.updateCustomer(customer);
  }

  selected(vm: CustomerVmPlus) {
    this.selectedVm = vm.clone();
  }

  private toCustomerVmPlus(customer?: Customer) {
    const vm = CustomerVmPlus.create(
      customer,
      // Bind to container's action callbacks, replacing presenter emitters.
      // Question: should we do this just because we can?
      this.cancel.bind(this),
      this.save.bind(this),
      this.selected.bind(this),
    );
    return vm;
  }
}