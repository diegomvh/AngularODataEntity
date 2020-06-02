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
    //Nortwind
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
