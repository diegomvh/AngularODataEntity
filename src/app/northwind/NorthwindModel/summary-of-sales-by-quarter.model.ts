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
  ODataFunctionOptions,
  ODataActionOptions,
  Duration,
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { SummaryOfSalesByQuarter } from './summary-of-sales-by-quarter.entity';
import { SummaryOfSalesByQuarterCollection } from './summary-of-sales-by-quarter.collection';
//#endregion

@Model()
export class SummaryOfSalesByQuarterModel<E extends SummaryOfSalesByQuarter> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  ShippedDate?: Date;
  public $$ShippedDate() {
    return this.property<Date>('ShippedDate');
  }
  public $ShippedDate() {
    return this.getAttribute<Date>('ShippedDate') as Date;
  }
  
  public ShippedDate$(options?: ODataQueryArgumentsOptions<Date>) {
    return this.fetchAttribute<Date>('ShippedDate', options) as Observable<Date>;
  }
  @ModelField()
  OrderID!: number;
  public $$OrderID() {
    return this.property<number>('OrderID');
  }
  public $OrderID() {
    return this.getAttribute<number>('OrderID') as number;
  }
  
  public OrderID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('OrderID', options) as Observable<number>;
  }
  @ModelField()
  Subtotal?: number;
  public $$Subtotal() {
    return this.property<number>('Subtotal');
  }
  public $Subtotal() {
    return this.getAttribute<number>('Subtotal') as number;
  }
  
  public Subtotal$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Subtotal', options) as Observable<number>;
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}