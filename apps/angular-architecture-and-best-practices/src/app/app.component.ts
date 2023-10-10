import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from './core/services/data.service';
import { EventBusService, Events } from './core/services/event-bus.service';
import { Customer } from './shared/interfaces';
import { AutoUnsubscribe } from 'ngx-auto-unsubscribe';

@AutoUnsubscribe()
@Component({
  selector: 'nx-angular-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  customers: Customer[] = [];
  customer: Customer | null = null;
  eventbusSub: Subscription = new Subscription();
  customersChangedSub: Subscription = new Subscription();

  constructor(
    private readonly eventbus: EventBusService,
    private readonly dataService: DataService
  ) { }

  ngOnInit() {
    //Example of using an event bus to provide loosely coupled communication (mediator pattern)
    this.eventbusSub = this.eventbus.on(Events.CustomerSelected, (cust: Customer) => (this.customer = cust));

    //Example of using BehaviorSubject to be notified when a service changes
    this.customersChangedSub = this.dataService.customersChanged$.subscribe(custs => (this.customers = custs));
  }

  ngOnDestroy() {
    // AutoUnsubscribe decorator above makes these calls unnecessary
    // this.eventbusSub.unsubscribe();
    // this.customersChangedSub.unsubscribe();
  }
}