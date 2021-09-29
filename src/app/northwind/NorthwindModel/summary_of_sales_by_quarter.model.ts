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
import { SummaryOfSalesByQuarter } from './summary_of_sales_by_quarter.entity';
import { SummaryOfSalesByQuarterCollection } from './summary_of_sales_by_quarter.collection';
//#endregion

@Model()
export class SummaryOfSalesByQuarterModel<E extends SummaryOfSalesByQuarter> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  ShippedDate?: Date;
  public $ShippedDate() {
    return this.property<Date>('ShippedDate');
  }
  public getShippedDate(options?: ODataOptions) {
    return this.getValue<Date>('ShippedDate', options) as Observable<Date>;
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
  Subtotal?: number;
  public $Subtotal() {
    return this.property<number>('Subtotal');
  }
  public getSubtotal(options?: ODataOptions) {
    return this.getValue<number>('Subtotal', options) as Observable<number>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}