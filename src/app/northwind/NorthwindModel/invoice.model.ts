import { ODataModel, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Invoice } from './invoice.entity';
import { InvoiceCollection } from './invoice.collection';
//#endregion

export class InvoiceModel<E extends Invoice> extends ODataModel<E> {
  //#region ODataApi Properties
  shipName?: string;
  shipAddress?: string;
  shipCity?: string;
  shipRegion?: string;
  shipPostalCode?: string;
  shipCountry?: string;
  customerID?: string;
  customerName: string;
  address?: string;
  city?: string;
  region?: string;
  postalCode?: string;
  country?: string;
  salesperson: string;
  orderID: number;
  orderDate?: Date;
  requiredDate?: Date;
  shippedDate?: Date;
  shipperName: string;
  productID: number;
  productName: string;
  unitPrice: number;
  quantity: number;
  discount: number;
  extendedPrice?: number;
  freight?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}