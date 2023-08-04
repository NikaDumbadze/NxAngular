import { Injectable } from '@angular/core';
import { List } from 'immutable';
import { Customer, Product } from '../../shared/interfaces';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { environment } from 'apps/angular-architecture-and-best-practices/src/environments/environment';
import { ClonerService } from './cloner.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private readonly _customersUrl: string = `${environment.apiUrl}/customers`;
  private readonly _productsUrl: string = `${environment.apiUrl}/products`;

  immutableCustomers = List<Customer>();
  immutableProducts = List<Product>();
  customers!: Customer[];

  private customersSubject$ = new BehaviorSubject<Customer[]>(this.customers);
  customersChanged$ = this.customersSubject$.asObservable();

  constructor(
    private readonly http: HttpClient,
    private readonly clonerService: ClonerService
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

  addCustomer(): Observable<Customer[]> {
    if (this.customers) {
      let id = this.customers[this.customers.length - 1]?.id;
      id = id ? id + 1 : 1;

      this.customers.push({
        id: id,
        name: 'New Customer ' + id,
        city: 'Somewhere',
        age: id * 5
      });

      this.customersSubject$.next(this.customers);
    }

    return of(this.customers);
  }

  addCustomerClone(): Observable<Customer[]> {
    return this.addCustomer().pipe(
      map(custs => {
        return this.clonerService.deepClone(custs);
      })
    )
  }
}
