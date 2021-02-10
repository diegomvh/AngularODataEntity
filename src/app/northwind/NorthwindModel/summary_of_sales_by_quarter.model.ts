import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SummaryOfSalesByQuarter } from './summary_of_sales_by_quarter.entity';
import { SummaryOfSalesByQuarterCollection } from './summary_of_sales_by_quarter.collection';
//#endregion

export class SummaryOfSalesByQuarterModel<E extends SummaryOfSalesByQuarter> extends ODataModel<E> {
  //#region ODataApi Properties
  ShippedDate?: Date;
  OrderID!: number;
  Subtotal?: number;
  //#endregion
  //#region ODataApi Setters
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}