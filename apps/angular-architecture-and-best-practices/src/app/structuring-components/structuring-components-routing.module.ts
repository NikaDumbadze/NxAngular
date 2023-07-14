import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StructuringComponentsComponent } from './structuring-components/structuring-components.component';

const routes: Routes = [
  { path: 'structuring-components', component: StructuringComponentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StructuringComponentsRoutingModule {
  static components = [StructuringComponentsComponent];
}
