import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddtaxPipe } from './addtax.pipe';
import { AddtaxMemoPipe } from './addtax-memo.pipe';

const declarables = [AddtaxPipe, AddtaxMemoPipe];

@NgModule({
  declarations: declarables,
  imports: [CommonModule],
  exports: declarables,
})
export class SharedModule { }
