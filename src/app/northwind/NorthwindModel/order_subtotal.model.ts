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
import { OrderSubtotal } from './order_subtotal.entity';
import { OrderSubtotalCollection } from './order_subtotal.collection';
//#endregion

@Model()
export class OrderSubtotalModel<E extends OrderSubtotal> extends ODataModel<E> {
  //#region ODataApiGen Properties
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