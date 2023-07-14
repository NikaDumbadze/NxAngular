import { Component, OnInit } from '@angular/core';
import { Customer } from '../../shared/interfaces';

@Component({
  selector: 'nx-angular-structuring-components',
  templateUrl: './structuring-components.component.html',
  styleUrls: ['./structuring-components.component.scss'],
})
export class StructuringComponentsComponent implements OnInit {

  customers: Customer[] = [];
  customer!: Customer;

  constructor() {}

  ngOnInit(): void {
  }

}
