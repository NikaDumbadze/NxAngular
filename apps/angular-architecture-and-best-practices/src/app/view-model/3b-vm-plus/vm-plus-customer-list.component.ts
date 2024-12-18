import { Component, Input } from '@angular/core';
import { CustomerVmPlus } from './customer-vm-plus';


@Component({
  selector: 'nx-angular-vm-plus-customer-list',
  styleUrls: ['../view-model.scss'],
  template: `
  <h4>Customers</h4>

  <table class="table table-striped nav">
    <tr *ngFor="let vm of vms" (click)="vm.selected()">
      <td>{{ vm.name }}</td>
      <!-- Look Ma! No pipe! -->
    </tr>
  </table>
`
})
export class VmPlusCustomerListComponent {
  @Input() vms: CustomerVmPlus[] = [];
}