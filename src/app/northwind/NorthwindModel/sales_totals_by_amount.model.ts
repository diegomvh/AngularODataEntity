import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryArgumentsOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SalesTotalsByAmount } from './sales_totals_by_amount.entity';
import { SalesTotalsByAmountCollection } from './sales_totals_by_amount.collection';
//#endregion

@Model()
export class SalesTotalsByAmountModel<E extends SalesTotalsByAmount> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  SaleAmount?: number;
  public $SaleAmount() {
    return this.property<number>('SaleAmount');
  }
  public getSaleAmount(options?: ODataOptions) {
    return this.getValue<number>('SaleAmount', options) as Observable<number>;
  }
  
  @ModelField()
  OrderID!: number;
  public $OrderID() {
    return this.property<number>('OrderID');
  }
  public getOrderID(options?: ODataOptions) {
    return this.getValue<number>('OrderID', options) as Observable<number>;
  }
  
  @ModelField()
  CompanyName!: string;
  public $CompanyName() {
    return this.property<string>('CompanyName');
  }
  public getCompanyName(options?: ODataOptions) {
    return this.getValue<string>('CompanyName', options) as Observable<string>;
  }
  
  @ModelField()
  ShippedDate?: Date;
  public $ShippedDate() {
    return this.property<Date>('ShippedDate');
  }
  public getShippedDate(options?: ODataOptions) {
    return this.getValue<Date>('ShippedDate', options) as Observable<Date>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}