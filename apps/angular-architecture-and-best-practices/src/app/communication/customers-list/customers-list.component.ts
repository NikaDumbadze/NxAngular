import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { Customer } from '../../shared/interfaces';
import { EmitEvent, EventBusService, Events } from '../../core/services/event-bus.service';

@Component({
  selector: 'nx-angular-customers-list',
  templateUrl: './customers-list.component.html',
  styleUrls: ['./customers-list.component.scss'],
})
export class CustomersListComponent implements OnChanges {

  @Input()
  customers: Customer[] = [];

  @Output()
  customerSelected = new EventEmitter<Customer>();

  logMessages: string[] = [];

  constructor(
    private eventBusService: EventBusService
  ) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['customers'])
      this.logMessages.push('ngOnChanges Fired: Customers changed');
  }

  selectCustomer(cust: Customer) {
    // send to parent via output property
    // note: could use evenbus as well if desired but output property
    // would be the preffered method for passing data to am immediate parent
    this.customerSelected.emit(cust);
    // Send customer to any eventbus listeners listening for the CustomerSelected event
    this.eventBusService.emit(new EmitEvent(Events.customerSelected, cust));
  }
}