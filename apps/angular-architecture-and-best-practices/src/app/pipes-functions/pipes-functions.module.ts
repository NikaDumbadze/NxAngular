import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PipesFunctionsRoutingModule } from './pipes-functions-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [
    PipesFunctionsRoutingModule.components
  ],
  imports: [
    CommonModule,
    SharedModule,
    PipesFunctionsRoutingModule
  ],
})
export class PipesFunctionsModule { }