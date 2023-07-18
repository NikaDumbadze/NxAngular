import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PlanningModule } from './planning/planning.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { StructuringComponentsModule } from './structuring-components/structuring-components.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    PlanningModule,
    StructuringComponentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
