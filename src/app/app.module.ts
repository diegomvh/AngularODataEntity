import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ODataModule } from 'angular-odata';
import { PeopleComponent, AirlinesComponent, AirportsComponent, PersonComponent } from './components';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { TripPinConfig, TripPinModule } from './trippin';
import { NorthwindConfig, NorthwindModule } from './northwind';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent,
    AirlinesComponent,
    AirportsComponent,
    PersonComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    TableModule,
    DialogModule,
    ODataModule.forRoot(Object.assign(TripPinConfig, {
      serviceRootUrl: 'https://services.odata.org/V4/(S(4m0tuxtnhcfctl4gzem3gr10))/TripPinServiceRW/',
      stringAsEnum: true
    }), NorthwindConfig),
    TripPinModule,
    NorthwindModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
