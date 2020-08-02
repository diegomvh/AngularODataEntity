import { ODataModel, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { OrderSubtotal } from './order_subtotal.entity';
import { OrderSubtotalCollection } from './order_subtotal.collection';
//#endregion

export class OrderSubtotalModel<E extends OrderSubtotal> extends ODataModel<E> {
  //#region ODataApi Properties
  OrderID: number;
  Subtotal?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}