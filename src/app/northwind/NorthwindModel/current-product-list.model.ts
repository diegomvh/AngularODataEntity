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

import { CurrentProductList } from './current-product-list.entity';

@Model()
export class CurrentProductListModel<E extends CurrentProductList> extends ODataModel<E> {
  @ModelField()
  ProductID!: number;
  public $$ProductID() {
    return this.property<number>('ProductID');
  }
  public $ProductID() {
    return this.getAttribute<number>('ProductID') as number;
  }
  
  public ProductID$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('ProductID', options) as Observable<number>;
  }

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

  
  
  
}