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
        acceptMetadata: 'full',
        stringAsEnum: true
      }), 
      // North version 2
      Object.assign({
        name: 'North2',
        serviceRootUrl: 'http://localhost:4200/north2/',
        version: '2.0',
        withCredentials: true,
        params: {"$format": "json"}
      }),
      // North version 3
      Object.assign({
        name: 'North3',
        serviceRootUrl: 'http://localhost:4200/north3/',
        version: '3.0',
        withCredentials: true,
        params: {"$format": "json"}
      }),
      // Northwind version 4
      Object.assign(NorthwindConfig, {
        ieee754Compatible: true
      })
    ),
    TripPinModule,
    NorthwindModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
