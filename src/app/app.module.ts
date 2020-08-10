import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MatTableModule } from '@angular/material/table';
import { MatRadioModule } from '@angular/material/radio';

import { AppComponent } from './app.component';
import { UpdateComponent } from './update/update.component';
import { RetrieveComponent } from './retrieve/retrieve.component';
import { NavComponent } from './nav/nav.component';
import { HomeComponent } from './home/home.component';
import { NewDataComponent } from './new-data/new-data.component';
import { HelpComponent } from './help/help.component'

import { DataService } from './services/data.service';
import { InterceptorService } from './services/interceptor.service';

@NgModule({
  declarations: [
    AppComponent,
    UpdateComponent,
    RetrieveComponent,
    NavComponent,
    HomeComponent,
    NewDataComponent,
    HelpComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MDBBootstrapModule.forRoot(),
    MatInputModule,
    BrowserAnimationsModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatRadioModule
  ],
  providers: [
    DataService, 
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
