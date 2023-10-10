import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { PlanningModule } from './planning/planning.module';
import { RouterModule } from '@angular/router';
import { routes } from './routes';
import { HttpClientModule } from '@angular/common/http';
import { StructuringComponentsModule } from './structuring-components/structuring-components.module';
import { PipesFunctionsModule } from './pipes-functions/pipes-functions.module';
import { CommunicationModule } from './communication/communication.module';
import { ViewModelModule } from './view-model/view-model.module';
import { SubjectsModule } from './subjects/subjects.module';
import { InheritanceModule } from './inheritance/inheritance.module';
import { HttpClientRxJSModule } from './http-client-rxjs/http-client-rxjs.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    PlanningModule,
    StructuringComponentsModule,
    PipesFunctionsModule,
    CommunicationModule,
    ViewModelModule,
    SubjectsModule,
    InheritanceModule,
    HttpClientRxJSModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
