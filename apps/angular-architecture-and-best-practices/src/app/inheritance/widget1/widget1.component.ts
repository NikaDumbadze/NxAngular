import { Component, OnInit } from '@angular/core';
import { BaseComponent } from '../base/base-component';

@Component({
   selector: 'nx-angular-widget1',
   templateUrl: './widget1.component.html',
   styleUrls: ['./widget1.component.scss']
})
export class Widget1Component extends BaseComponent implements OnInit {
  constructor() {
    super();
  }
}