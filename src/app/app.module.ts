import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ODataModule } from 'angular-odata';
import { TripPinConfig, TripPinModule } from './trippin';
import { PeopleComponent } from './components';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';

@NgModule({
  declarations: [
    AppComponent,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    InputTextModule,
    TableModule,
    ODataModule.forRoot(Object.assign(TripPinConfig, {baseUrl: 'https://services.odata.org/V4/(S(4m0tuxtnhcfctl4gzem3gr10))/TripPinServiceRW/' })),
    TripPinModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
