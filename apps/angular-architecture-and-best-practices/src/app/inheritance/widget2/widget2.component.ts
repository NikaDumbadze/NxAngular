import { Component, OnInit } from "@angular/core";
import { BaseComponent } from "../base/base-component";

@Component({
  selector: 'nx-angular-widget2',
  templateUrl: './widget2.component.html',
  styleUrls: ['./widget2.component.scss']
})
export class Widget2Component extends BaseComponent implements OnInit {
  constructor() {
    super();
  }
}