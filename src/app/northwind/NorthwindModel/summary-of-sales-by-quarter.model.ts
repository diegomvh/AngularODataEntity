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

import { SummaryOfSalesByQuarter } from './summary-of-sales-by-quarter.entity';

@Model()
export class SummaryOfSalesByQuarterModel<E extends SummaryOfSalesByQuarter> extends ODataModel<E> {
  @ModelField()
  ShippedDate!: Date;
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
  Subtotal!: number;
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