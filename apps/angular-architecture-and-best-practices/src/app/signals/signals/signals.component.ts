import { Component, Injector, OnInit, computed, effect, inject, signal } from "@angular/core";
import { Customer } from "../../shared/interfaces";
import { DataService } from "../../core/services/data.service";
import { delay } from "rxjs";

@Component({
  selector: 'nx-angular-signal',
  templateUrl: './signals.component.html',
  styleUrls: ['./signals.component.scss']
})
export class SignalsComponent implements OnInit {
  customers = signal<Customer[]>([]);
  selectedCustomer = signal<Customer>({} as Customer);
  loading = signal(true);
  searchQuery = signal('');
  dataService = inject(DataService);
  // This is a bit "meta"
  injector = inject(Injector);

  //Define a computed value for the filtered customers
  filteredCustomers = computed(() => {
    return this.customers().filter((customer) =>
      customer.name.toUpperCase().includes(this.searchQuery().toUpperCase())
    );
  });

  ngOnInit() {
    this.initializeLogging();
    this.dataService.getCustomers().pipe(
      delay(1000) // simulate delay for our loading signal
    ).subscribe(custs => {
      this.loading.set(false);
      this.customers.set(custs);
    })
  }

  initializeLogging() {
    // Called as signal change
    // Effects used for very specific use cases: hhtps://angular.io/guide/signals#effects
    effect(() => {
      console.log(`Selected customer name: ${this.selectedCustomer().name}`)
    }, { injector: this.injector });
  }

  onSearchQuery(event: Event) {
    this.searchQuery.set((event.target as HTMLInputElement).value);
  }

  onCustomerNameChange(event: Event) {
    this.selectedCustomer.mutate(value => value.name = (event.target as HTMLInputElement).value);
  }

  editCustomer(customer: Customer) {
    this.selectedCustomer.set(customer);
  }

  isEditingCustomer(customer: Customer) {
    return this.selectedCustomer() === customer;
  }

  save() {
    // mutate this.customers with the value of this.editingCustomer()
    this.customers.mutate(value => {
      const index = value.findIndex(c => c.id === this.selectedCustomer().id);
      value[index] = this.selectedCustomer();
    });
    this.resetEditing();
  }

  cancel() {
    this.resetEditing();
  }

  isLoading() {
    return this.loading();
  }

  resetEditing() {
    this.selectedCustomer.set({} as Customer);
  }
}