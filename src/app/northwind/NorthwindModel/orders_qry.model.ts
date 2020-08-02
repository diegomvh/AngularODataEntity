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
  orderID: number;
  customerID?: string;
  employeeID?: number;
  orderDate?: Date;
  requiredDate?: Date;
  shippedDate?: Date;
  shipVia?: number;
  freight?: number;
  shipName?: string;
  shipAddress?: string;
  shipCity?: string;
  shipRegion?: string;
  shipPostalCode?: string;
  shipCountry?: string;
  companyName: string;
  address?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}