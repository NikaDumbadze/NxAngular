import { Component, OnInit } from '@angular/core';
import { Customer } from '../../shared/interfaces';
import { DataService } from '../../core/services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'nx-angular-communication',
  templateUrl: './communication.component.html',
  styleUrls: ['./communication.component.scss'],
})
export class CommunicationComponent implements OnInit {

  customers: Customer[] = [];
  customer!: Customer;

  private _subs!: Subscription;

  constructor(
    private readonly dataService: DataService
  ) { }

  ngOnInit(): void {
    this._subs = this.dataService.getCustomers()
      .subscribe((custs: Customer[]) => this.customers = custs);
  }

  selected(cust: Customer) {
    this.customer = cust;
  }

  addCustomerPush() {
    this.dataService.addCustomer()
      .subscribe((custs: Customer[]) => this.customers = custs);
  }

  addCustomerClone() {
    this.dataService.addCustomerClone()
      .subscribe((custs: Customer[]) => this.customers = custs);
  }

  ngOnDestroy() {
    this._subs?.unsubscribe();
  }
}
