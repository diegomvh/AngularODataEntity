import { ODataModel, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OrdersQry } from './orders_qry.entity';
import { OrdersQryCollection } from './orders_qry.collection';
//#endregion

export class OrdersQryModel<E extends OrdersQry> extends ODataModel<E> {
  //#region ODataApi Properties
  OrderID: number;
  CustomerID?: string;
  EmployeeID?: number;
  OrderDate?: Date;
  RequiredDate?: Date;
  ShippedDate?: Date;
  ShipVia?: number;
  Freight?: number;
  ShipName?: string;
  ShipAddress?: string;
  ShipCity?: string;
  ShipRegion?: string;
  ShipPostalCode?: string;
  ShipCountry?: string;
  CompanyName: string;
  Address?: string;
  City?: string;
  Region?: string;
  PostalCode?: string;
  Country?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}