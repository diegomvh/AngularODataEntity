import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

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
} from 'angular-odata';

import { OrderSubtotal } from './order-subtotal.entity';

@Model()
export class OrderSubtotalModel<E extends OrderSubtotal> extends ODataModel<E> {
  @ModelField()
  declare OrderID: number;
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
  declare Subtotal: number;
  public $$Subtotal() {
    return this.property<number>('Subtotal');
  }
  public $Subtotal() {
    return this.getAttribute<number>('Subtotal') as number;
  }
  
  public Subtotal$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('Subtotal', options) as Observable<number>;
  }

  
  
  
}