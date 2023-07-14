import { Routes } from "@angular/router";

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/planning' },
  {
    path: 'features',
    loadChildren: () => import('./features/features.module').then((m) => m.FeaturesModule)
  },
];