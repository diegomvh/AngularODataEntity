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

import { CategorySalesFor1997 } from './category-sales-for-1997.entity';

@Model()
export class CategorySalesFor1997Model<E extends CategorySalesFor1997> extends ODataModel<E> {
  @ModelField()
  declare CategoryName: string;
  public $$CategoryName() {
    return this.property<string>('CategoryName');
  }
  public $CategoryName() {
    return this.getAttribute<string>('CategoryName') as string;
  }
  
  public CategoryName$(options?: ODataQueryArgumentsOptions<string>) {
    return this.fetchAttribute<string>('CategoryName', options) as Observable<string>;
  }

  @ModelField()
  declare CategorySales: number;
  public $$CategorySales() {
    return this.property<number>('CategorySales');
  }
  public $CategorySales() {
    return this.getAttribute<number>('CategorySales') as number;
  }
  
  public CategorySales$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('CategorySales', options) as Observable<number>;
  }

  
  
  
}