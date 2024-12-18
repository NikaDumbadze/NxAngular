import { Injectable } from '@angular/core';
import { Subject, Subscription, filter, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventBusService {

  private subject$ = new Subject();

  on(event: Events, action: any): Subscription {
    return this.subject$
      .pipe(
        filter((e: any) => e.name === event),
        map((e: EmitEvent) => e.name)
      )
      .subscribe(action);
  }

  emit(event: EmitEvent) {
    this.subject$.next(event);
  }
}

export class EmitEvent {
  constructor(public name: any, public value?: any) { }
}


export enum Events {
  customerSelected,
  CustomerSelected
}