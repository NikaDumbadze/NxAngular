import { Component, OnDestroy, OnInit } from "@angular/core";
import { ICustomer, SubjectService } from "../../core/services/subject.service";
import { SubSink } from 'subsink';

@Component({
  selector: 'nx-angular-subjects',
  templateUrl: './subjects.component.html',
  styles: [
    `
    .statu-area {
      color: red;
      width: 100%;
      height: 120px;
      scroll-behavior: smooth;
      overflow-y: scroll;
    }
    .status {
      color: red;
    }
    `
  ]
})
export class SubjectsComponent implements OnInit, OnDestroy {
  status = '';
  subjectObservableData: ICustomer[][] = [];
  behaviorSubjectObservableData: ICustomer[][] = [];
  replaySubjectObservableData: ICustomer[][] = [];
  asyncSubjectObservableData: ICustomer[][] = [];
  timeoutIds: any[] = [];
  subsinc = new SubSink();

  constructor(
    private readonly subjectService: SubjectService
  ) { }

  ngOnInit() { }

  ngOnDestroy() {
    this.subsinc.unsubscribe();
    for (const id of this.timeoutIds) {
      clearInterval(id);
    }
  }

  start() {
    this.subjectService.start();
  }

  runAction(actionText: string, actionType: ActionType | null, delay: number | null) {
    let action: () => void;
    switch (actionType) {
      case ActionType.subject:
        action = () => {
          this.subsinc.sink = this.subjectService.subjectObservable$.subscribe(
            custs => this.subjectObservableData.push(custs)
          );
        };
        break;
      case ActionType.behaviorSubject:
        action = () => {
          this.subsinc.sink = this.subjectService.behaviorSubjectObservable$.subscribe(
            custs => this.behaviorSubjectObservableData.push(custs)
          );
        }
        break;
      case ActionType.replaySubject:
        action = () => {
          this.subsinc.sink = this.subjectService.replaySubjectObservsble$.subscribe(
            custs => this.replaySubjectObservableData.push(custs)
          );
        }
        break;
      case ActionType.asyncSubject:
        action = () => {
          this.subsinc.sink = this.subjectService.asyncSubjectObservable$.subscribe(
            custs => this.asyncSubjectObservableData.push(custs)
          );
        }
        break;
    }

    // update status and perform action
    const timeoutId: any = setTimeout(() => {
      this.status = this.status + actionText.trim() + '\n';
      if (action) {
        action();
      }
    }, delay ? delay : 0);
  }
}

enum ActionType {
  subject,
  behaviorSubject,
  replaySubject,
  asyncSubject
}