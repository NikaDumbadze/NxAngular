import { Injectable } from '@angular/core';

import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

import { CustomerOrdersDataService } from '../../services/customer-orders-data';
import { CustomerVm } from '../customer-vm';
import { OrderVm, createOrderVm } from '../order-vm';

/** ViewService creates and manages Customer and Order ViewModels */
@Injectable({
  providedIn: 'root'
})
export class CustomersOrdersViewService {
  customerVms$!: Observable<CustomerVm[]>;

  constructor(
    private readonly customerOrdersDataService: CustomerOrdersDataService
  ) {
    this.customerVms$ = this.createCustomerVms$();
  }

  addCustomer() {
    return CustomerVm.create();
  }

  private createCustomerVms$(): Observable<CustomerVm[]> {
    return this.customerOrdersDataService.customers$.pipe(
      map(customers =>
        customers.map(customer => {
          const watchOrders$ = this.customerOrdersDataService.watchCustomerOrders(customer);
          return CustomerVm.create(customer, watchOrders$);
        })
      )
    );
  }

  selectedOrderVm(orderId: number, customerVm: CustomerVm | null): Observable<OrderVm> {
    if (customerVm) {
      return this.customerOrdersDataService
        .getOrderGraphByOrderId(orderId)
        .pipe(map(orderGraph => createOrderVm(customerVm, orderGraph)));
    } else {
      return of();
    }
  }

  saveCustomer(customerVm: CustomerVm | null) {
    if (customerVm) {
      const customer = customerVm.toCustomer();

      customer.id == 0 ?
        this.customerOrdersDataService.addCustomer(customer)
        :
        this.customerOrdersDataService.updateCustomer(customer);
    }
  }

  /** Limited save. Can only update certain aspects of an existing order */
  saveOrder(orderVm: OrderVm) {
    const { orderId, orderDate, memo, lineItems } = orderVm;

    this.customerOrdersDataService.updateOrder({ id: orderId, orderDate, memo });
    lineItems.forEach(item => {
      const { id, quantity } = item;
      this.customerOrdersDataService.updateLineItem({ id, quantity });
    });
  }
}
