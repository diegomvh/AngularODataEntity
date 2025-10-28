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

import { ProductsAboveAveragePrice } from './products-above-average-price.entity';

@Model()
export class ProductsAboveAveragePriceModel<E extends ProductsAboveAveragePrice> extends ODataModel<E> {
  @ModelField()
  ProductName!: string;
  public $$ProductName() {
    return this.property<string>('ProductName');
  }
  public $ProductName() {
    return this.getAttribute<string>('ProductName') as string;
  }
  
  public ProductName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('ProductName', options) as Observable<string>;
  }

  @ModelField()
  UnitPrice!: number;
  public $$UnitPrice() {
    return this.property<number>('UnitPrice');
  }
  public $UnitPrice() {
    return this.getAttribute<number>('UnitPrice') as number;
  }
  
  public UnitPrice$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('UnitPrice', options) as Observable<number>;
  }

  
  
  
}