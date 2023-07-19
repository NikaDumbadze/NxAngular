import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Customer } from '../../shared/interfaces';

@Component({
  selector: 'nx-angular-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomerDetailsComponent {

  @Input()
  customer!: Customer;

  constructor() { }
}
