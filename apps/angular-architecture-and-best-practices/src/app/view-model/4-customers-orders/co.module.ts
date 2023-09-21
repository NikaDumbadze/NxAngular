import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { Routes, RouterModule } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";
import { CustomersOrdersContainerComponent } from "./co-container.component";
import { CustomerDetailsComponent } from "./co-customer-details.component";
import { CustomerListComponent } from "./co-customer-list.component";
import { OrderDetailsComponent } from "./co-order-details.component";
import { CustomersOrdersShellComponent } from "./co-shell.component";

const routes: Routes = [{ path: '', component: CustomersOrdersShellComponent }];

/** ViewModel Class Demo - NgModule */
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    CustomerDetailsComponent,
    CustomerListComponent,
    OrderDetailsComponent,
    CustomersOrdersContainerComponent,
    CustomersOrdersShellComponent
  ]
})
export class CustomersOrdersModule { }