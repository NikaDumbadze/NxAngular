import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { components, routes } from './routes';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [components],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class OrdersModule { }
