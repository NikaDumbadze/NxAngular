import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddtaxPipe } from './addtax.pipe';
import { AddtaxMemoPipe } from './addtax-memo.pipe';
import { FullNamePipe } from './fullname.pipe';
import { InputDateComponent } from './input-date/input-date.component';
import { AgePipe } from './age.pipe';

const declarables = [AddtaxPipe, AddtaxMemoPipe, FullNamePipe, AgePipe, InputDateComponent];

@NgModule({
  declarations: declarables,
  imports: [CommonModule],
  exports: declarables,
})
export class SharedModule { }
