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
import { OrderSubtotal } from './order_subtotal.entity';
import { OrderSubtotalCollection } from './order_subtotal.collection';
//#endregion

@Model()
export class OrderSubtotalModel<E extends OrderSubtotal> extends ODataModel<E> {
  //#region ODataApiGen Properties
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