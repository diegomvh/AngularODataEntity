import { ODataModel, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OrderDetailsExtended } from './order_details_extended.entity';
import { OrderDetailsExtendedCollection } from './order_details_extended.collection';
//#endregion

export class OrderDetailsExtendedModel<E extends OrderDetailsExtended> extends ODataModel<E> {
  //#region ODataApi Properties
  orderID: number;
  productID: number;
  productName: string;
  unitPrice: number;
  quantity: number;
  discount: number;
  extendedPrice?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}