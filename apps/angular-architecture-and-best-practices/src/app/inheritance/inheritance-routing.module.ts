import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { InheritanceComponent } from "./inheritance/inheritance.component";
import { Widget1Component } from "./widget1/widget1.component";
import { Widget2Component } from "./widget2/widget2.component";

const routes: Routes = [
  { path: 'inheritance', component: InheritanceComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InheritanceRoitingModule {
  static components = [InheritanceComponent, Widget1Component, Widget2Component];
}