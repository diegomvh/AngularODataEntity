import { ODataModel, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SummaryOfSalesByYear } from './summary_of_sales_by_year.entity';
import { SummaryOfSalesByYearCollection } from './summary_of_sales_by_year.collection';
//#endregion

export class SummaryOfSalesByYearModel<E extends SummaryOfSalesByYear> extends ODataModel<E> {
  //#region ODataApi Properties
  shippedDate?: Date;
  orderID: number;
  subtotal?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}