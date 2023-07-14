import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FeaturesComponent } from './features/features.component';

const routes: Routes = [
  {
    path: '',
    component: FeaturesComponent,
    children: [
      { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule) },
      { path: 'orders', loadChildren: () => import('./orders/orders.module').then(m => m.OrdersModule) }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule {
  static components = [FeaturesComponent];
}
