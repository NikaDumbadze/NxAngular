import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges, ChangeDetectionStrategy } from '@angular/core';
import { Customer } from '../../shared/interfaces';

@Component({
  selector: 'nx-angular-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomersListComponent implements OnChanges {

  @Input()
  customers: Customer[] = [];

  @Output()
  customerSelected = new EventEmitter<Customer>();

  logMessages: string[] = [];

  constructor() { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customers']) {
      this.logMessages.push('Customers changed');
    }
  }

  selectCustomer(cust: Customer) {
    this.customerSelected.emit(cust);
  }
}
