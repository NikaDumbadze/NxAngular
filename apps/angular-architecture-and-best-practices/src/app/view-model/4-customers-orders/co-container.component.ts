import { Component } from "@angular/core";
import { Observable } from "rxjs";

import { CustomersOrdersViewService } from "./services/co-view.service";
import { CustomerVm, OrderSummaryVm } from "./customer-vm";
import { OrderVm, createOrderVm } from "./order-vm";

/**
 * Master/Detail following the Container/Presenter pattern.
 * Master: customer list of Customer ViewModels
 * Customer Detail: detail about a selected Customer
 * Order Detail: detail about a selected Order for the selected Customer
 */
@Component({
  selector: 'nx-angular-co-container',
  styleUrls: ['../view-model.scss'],
  template: `
  <button (click)="addCustomer()" class="btn btn-primary button-row">Add Customer</button>

  <div *ngIf="customerVms$ | async as vms" class="row">
    <!-- Customer List -->
    <div class="col-md-2">
      <nx-angular-co-customer-list [vms]="vms" (selected)="selectCustomer($event)"></nx-angular-co-customer-list>
    </div>

    <!-- Customer Details -->
    <div class="col-md-5">
      <nx-angular-co-customer-details
        [vm]="selectedCustomerVm"
        (selectOrder)="selectOrder($event)"
        (cancel)="cancelCustomer()"
        (save)="saveCustomer($event)"
      >
      </nx-angular-co-customer-details>
    </div>

    <!-- Order Details -->
    <div class="col-md-5" *ngIf="(selectedOrderVm$ | async)?.orderId">
      <nx-angular-co-order-details [vm]="selectedOrderVm$ | async" (cancel)="cancelOrder()" (save)="saveOrder($event)">
      </nx-angular-co-order-details>
    </div>
  </div>
`
})
export class CustomersOrdersContainerComponent {
  customerVms$!: Observable<CustomerVm[]> | null;
  selectedCustomerVm!: CustomerVm | null;
  selectedOrderVm$!: Observable<OrderVm> | null;

  constructor(
    private readonly customersOrdersViewService: CustomersOrdersViewService
  ) {
    this.customerVms$ = this.customersOrdersViewService.customerVms$;
  }

  addCustomer() {
    this.selectedCustomerVm = this.customersOrdersViewService.addCustomer();
  }

  cancelCustomer() {
    this.selectedCustomerVm = null;
    this.cancelOrder();
  }

  cancelOrder() {
    this.selectedOrderVm$ = null;
  }

  saveCustomer(customerVm: CustomerVm) {
    this.selectedCustomerVm = null;
    this.selectedOrderVm$ = null;
    this.customersOrdersViewService.saveCustomer(customerVm);
  }

  saveOrder(ordrVm: OrderVm) {
    this.selectedOrderVm$ = null;
    this.customersOrdersViewService.saveOrder(ordrVm);
  }

  selectCustomer(vm: CustomerVm) {
    this.selectedCustomerVm = vm.clone();
    this.cancelOrder();
  }

  selectOrder(orderSummary: OrderSummaryVm) {
    this.selectedOrderVm$ = this.customersOrdersViewService.selectedOrderVm(orderSummary.id, this.selectedCustomerVm);
  }
}