import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SignalsComponent } from './signals/signals.component';
import { routes } from './routes';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
    FormsModule
  ],
  declarations: [SignalsComponent],
})
export class SignalsModule { }