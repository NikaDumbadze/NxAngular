import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { Customer, Product } from '../../shared/interfaces';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  immutableCustomers = List<Customer>();
  immutableProducts = List<Product>();

  // private customersSubject$ = new BehaviorSubject<Customer[]>()

  constructor() { }
}
