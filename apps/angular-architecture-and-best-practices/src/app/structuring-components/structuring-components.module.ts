import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StructuringComponentsRoutingModule } from './structuring-components-routing.module';

@NgModule({
  declarations: [
    StructuringComponentsRoutingModule.components
  ],
  imports: [
    CommonModule,
    StructuringComponentsRoutingModule
  ],
})
export class StructuringComponentsModule { }
