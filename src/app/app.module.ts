import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ODataModule } from 'angular-odata';
import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { DialogModule } from 'primeng/dialog';
import { TripPinConfig, TripPinModule } from './trippin';
import { NorthwindConfig, NorthwindModule } from './northwind';
import { North2Config, North2Module } from './north2';
import { North3Config, North3Module } from './north3';
import { MsGraphConfig, MsGraphModule } from './msgraph';
import { CBSConfig, CBSModule } from './cbs';
import { PeopleComponent, AirlinesComponent, AirportsComponent, PersonComponent } from './components/trippin';
import { ProductsComponent, CategoriesComponent } from './components/northwind';
import { OrdersComponent } from './components/northwind/orders.component';
import { EmployeesComponent } from './components/northwind/employees.component';

@NgModule({
  declarations: [
    AppComponent,
    //TripPin
    PeopleComponent,
    AirlinesComponent,
    AirportsComponent,
    PersonComponent,
    //Northwind
    CategoriesComponent,
    ProductsComponent,
    OrdersComponent,
    EmployeesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    InputTextModule,
    TableModule,
    DialogModule,
    ODataModule.forRoot(
      // TripPin
      Object.assign(TripPinConfig, {
        serviceRootUrl: 'http://localhost:4200/trippin/',
        metadata: 'full',
        stringAsEnum: true
      }), 
      // North version 2
      Object.assign(North2Config, {
        serviceRootUrl: 'http://localhost:4200/north2/',
        metadata: 'full',
        withCredentials: true,
        params: {"$format": "json"}
      }),
      // North version 3
      Object.assign(North3Config, {
        serviceRootUrl: 'http://localhost:4200/north3/',
        metadata: 'full',
        withCredentials: true,
        params: {"$format": "json"}
      }),
      // Northwind version 4
      Object.assign(NorthwindConfig, {
        ieee754Compatible: true
      }),
      Object.assign(MsGraphConfig),
      Object.assign(CBSConfig)
    ),
    TripPinModule,
    NorthwindModule,
    North2Module, 
    North3Module,
    MsGraphModule,
    CBSModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
