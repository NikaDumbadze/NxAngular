import { Injectable } from "@angular/core";

import { Subject, BehaviorSubject, ReplaySubject, AsyncSubject, Observable, of } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  customers: ICustomer[] = [];
  intervalIds: any[] = [];

  private _subject$ = new Subject<ICustomer[]>;
  subjectObservable$: Observable<ICustomer[]> = of([]);

  private _behaviorSubject$ = new BehaviorSubject<ICustomer[]>([]);
  behaviorSubjectObservable$: Observable<ICustomer[]> = of([]);

  private _replaySubject$ = new ReplaySubject<ICustomer[]>;
  replaySubjectObservsble$: Observable<ICustomer[]> = of([]);

  private _asyncSubject$ = new AsyncSubject<ICustomer[]>;
  asyncSubjectObservable$: Observable<ICustomer[]> = of([]);

  constructor() { }

  start() {
    this.initSubjects();

    // simulate array getting new data from a data source
    const intervalId = setInterval(() => {
      const len = this.customers.length;
      this.customers.push({
        name: 'Customers ' + len,
        city: 'City ' + len
      });

      const clone: ICustomer[] = JSON.parse(JSON.stringify(this.customers));
      this._subject$.next(clone);
      this._behaviorSubject$.next(clone);
      this._replaySubject$.next(clone);
      this._asyncSubject$.next(clone);

      if (this.customers.length > 5) {
        this._asyncSubject$.complete();
      }
    }, 3000);

    this.intervalIds.push(intervalId);
  }

  initSubjects() {
    this._subject$ = new Subject();
    this.subjectObservable$ = this._subject$.asObservable();

    this._behaviorSubject$ = new BehaviorSubject(this.customers);
    this.behaviorSubjectObservable$ = this._behaviorSubject$.asObservable();

    this._replaySubject$ = new ReplaySubject();
    this.replaySubjectObservsble$ = this._replaySubject$.asObservable();

    this._asyncSubject$ = new AsyncSubject();
    this.asyncSubjectObservable$ = this._asyncSubject$.asObservable();
  }
}

export interface ICustomer {
  name: string;
  city: string;
}