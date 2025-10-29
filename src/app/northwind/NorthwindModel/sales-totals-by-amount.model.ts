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

import { SalesTotalsByAmount } from './sales-totals-by-amount.entity';

@Model()
export class SalesTotalsByAmountModel<E extends SalesTotalsByAmount> extends ODataModel<E> {
  @ModelField()
  declare SaleAmount: number;
  public $$SaleAmount() {
    return this.property<number>('SaleAmount');
  }
  public $SaleAmount() {
    return this.getAttribute<number>('SaleAmount') as number;
  }
  
  public SaleAmount$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('SaleAmount', options) as Observable<number>;
  }

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
  declare CompanyName: string;
  public $$CompanyName() {
    return this.property<string>('CompanyName');
  }
  public $CompanyName() {
    return this.getAttribute<string>('CompanyName') as string;
  }
  
  public CompanyName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('CompanyName', options) as Observable<string>;
  }

  @ModelField()
  declare ShippedDate: Date;
  public $$ShippedDate() {
    return this.property<Date>('ShippedDate');
  }
  public $ShippedDate() {
    return this.getAttribute<Date>('ShippedDate') as Date;
  }
  
  public ShippedDate$(options?: ODataQueryArgumentsOptions<Date>) {
    return this.fetchAttribute<Date>('ShippedDate', options) as Observable<Date>;
  }

  
  
  
}