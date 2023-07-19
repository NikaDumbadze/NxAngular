import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../shared/interfaces';
import { DataService } from '../../core/services/data.service';

@Component({
  selector: 'nx-angular-pipes-functions',
  templateUrl: './pipes-functions.component.html',
  styleUrls: ['./pipes-functions.component.scss'],
})
export class PipesFunctionsComponent implements OnInit {

  products$!: Observable<Product[] | any>;
  private readonly _tax: number = 0.8;
  newProduct: Product = {
    id: null,
    name: '',
    price: 0
  }

  constructor(
    private readonly dataService: DataService
  ) { }

  ngOnInit(): void {
    this.products$ = this.dataService.getProducts();
  }

  addTax(price: number) {
    console.log('addTax() function called');
    return price + (price * this._tax);
  }

  addProduct() {
   this.products$ = this.dataService.addProduct(this.newProduct);
  }
}