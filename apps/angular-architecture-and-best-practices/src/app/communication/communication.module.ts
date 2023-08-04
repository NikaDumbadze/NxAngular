import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomersListComponent } from './customers-list/customers-list.component';
import { CustomerDetailsComponent } from './customer-details/customer-details.component';
import { RouterModule } from '@angular/router';
import { routes, components } from './routes';

@NgModule({
  declarations: [
    components,
    CustomersListComponent,
    CustomerDetailsComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
})
export class CommunicationModule { }
