import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';

@NgModule({
  declarations: [FeaturesRoutingModule.components],
  imports: [CommonModule, FeaturesRoutingModule],
})
export class FeaturesModule {}
