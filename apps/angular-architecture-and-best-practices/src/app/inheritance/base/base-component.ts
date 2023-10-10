import { Component, ChangeDetectionStrategy, Input, Output, EventEmitter, SimpleChanges } from "@angular/core";

@Component({
  selector: 'nx-angular-base-component',
  template: '',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BaseComponent {
  @Input() label = '';
  @Input() isDirty = false;

  private _value = '';
  @Input() get value() {
    return this._value;
  }
  set value(val: string) {
    if (val && val !== this._value) {
      this.isDirty = true;
    }
    this._value = val;
    this.valueChange.emit(val);
  }

  @Output() valueChange = new EventEmitter<string>();

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['value']) {
      console.log('Value changed ', changes['value'].currentValue)
    }
  }
}