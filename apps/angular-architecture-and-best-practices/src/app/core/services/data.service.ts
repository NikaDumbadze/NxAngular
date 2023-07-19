import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { Customer, Product } from '../../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'apps/angular-architecture-and-best-practices/src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly _customersUrl: string = `${environment.apiUrl}/customers`;
  private readonly _productsUrl: string = `${environment.apiUrl}/products`;

  immutableCustomers = List<Customer>();
  immutableProducts = List<Product>();
  customers!: Customer;

  // private customersSubject$ = new BehaviorSubject<Customer[]>(this.customers)

  constructor(
    private readonly http: HttpClient
  ) { }

  getCustomers() {
    return this.http.get<Customer[]>(this._customersUrl);
  }

  getProducts() {
    return this.http.get<Product[]>(this._productsUrl);
  }

  addProduct(newProduct: Product) {
    return this.http.post<Product>(this._productsUrl, newProduct);
  }
}
