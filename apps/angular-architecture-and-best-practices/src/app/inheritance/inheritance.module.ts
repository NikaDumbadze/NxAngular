import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CommonModule } from "@angular/common";
import { InheritanceRoitingModule } from "./inheritance-routing.module";

@NgModule({
  declarations: [InheritanceRoitingModule.components],
  imports: [
    CommonModule,
    FormsModule,
    InheritanceRoitingModule
  ]
})
export class InheritanceModule { }