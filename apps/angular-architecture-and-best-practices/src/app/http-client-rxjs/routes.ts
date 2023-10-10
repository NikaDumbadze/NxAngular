import { Routes } from "@angular/router";
import { HttpClientRxJSComponent } from "./http-client-rxjs/http-client-rxjs.component";

export const routes: Routes = [
  { path: 'httpclient-rxjs', component: HttpClientRxJSComponent }
];

export const components = [HttpClientRxJSComponent];