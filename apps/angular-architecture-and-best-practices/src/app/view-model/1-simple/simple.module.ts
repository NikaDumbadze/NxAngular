import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { SharedModule } from '../../shared/shared.module';

import { SimpleContainerComponent } from './simple-container.component';
import { SimpleCustomerDetailsComponent } from './simple-customer-details.component';
import { SimpleCustomerListComponent } from './simple-customer-list.component';
import { SimpleShellComponent } from './simple-shell.component';

const routes: Routes = [{ path: '', component: SimpleShellComponent }];

/** Simple Vm Demo - NgModule */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    SimpleCustomerListComponent,
    SimpleCustomerDetailsComponent,
    SimpleContainerComponent,
    SimpleShellComponent
  ]
})
export class SimpleModule { }
