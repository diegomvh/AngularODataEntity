import { Model, ModelField, ODataModel, ODataCollection, HttpOptions, Duration, Expand, Select } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SalesTotalsByAmount } from './sales_totals_by_amount.entity';
import { SalesTotalsByAmountCollection } from './sales_totals_by_amount.collection';
//#endregion

@Model()
export class SalesTotalsByAmountModel<E extends SalesTotalsByAmount> extends ODataModel<E> {
  //#region ODataApi Properties
  @ModelField()
  SaleAmount?: number;
  
  
  @ModelField()
  OrderID!: number;
  
  
  @ModelField()
  CompanyName!: string;
  
  
  @ModelField()
  ShippedDate?: Date;
  
  
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}