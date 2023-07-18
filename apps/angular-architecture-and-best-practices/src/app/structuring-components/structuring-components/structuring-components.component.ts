import { Component, OnInit } from '@angular/core';
import { Customer } from '../../shared/interfaces';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'nx-angular-structuring-components',
  templateUrl: './structuring-components.component.html',
  styleUrls: ['./structuring-components.component.scss'],
})
export class StructuringComponentsComponent implements OnInit {

  customers: Customer[] = [];
  customer!: Customer;

  constructor(
    private readonly dataService: DataService
  ) { }

  ngOnInit(): void {
    this.dataService.getCustomers()
      .subscribe((custs: Customer[]) => this.customers = custs);
  }

  selected(cust: Customer) {
    this.customer = cust;
  }
}
