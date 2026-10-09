import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import {
  Model,
  ModelField,
  ODataModel,
  ODataCollection,
  ODataOptions,
  ODataQueryableOptions,
  ODataFunctionOptions,
  ODataActionOptions,
} from 'angular-odata';

import { SalesByCategory } from './sales-by-category.entity';

// #region Custom
// #endregion Custom
@Model()
export class SalesByCategoryModel<E extends SalesByCategory> extends ODataModel<E> {
  @ModelField()
  declare CategoryID: number;
  public $$CategoryID() {
    return this.property<number>('CategoryID');
  }
  public $CategoryID() {
    return this.getAttribute<number>('CategoryID') as number;
  }
  public CategoryID$(options?: ODataQueryableOptions<number>) {
    return this.fetchAttribute<number>('CategoryID', options) as Observable<number>;
  }

  @ModelField()
  declare CategoryName: string;
  public $$CategoryName() {
    return this.property<string>('CategoryName');
  }
  public $CategoryName() {
    return this.getAttribute<string>('CategoryName') as string;
  }
  public CategoryName$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('CategoryName', options) as Observable<string>;
  }

  @ModelField()
  declare ProductName: string;
  public $$ProductName() {
    return this.property<string>('ProductName');
  }
  public $ProductName() {
    return this.getAttribute<string>('ProductName') as string;
  }
  public ProductName$(options?: ODataQueryableOptions<string>) {
    return this.fetchAttribute<string>('ProductName', options) as Observable<string>;
  }

  @ModelField()
  declare ProductSales: number;
  public $$ProductSales() {
    return this.property<number>('ProductSales');
  }
  public $ProductSales() {
    return this.getAttribute<number>('ProductSales') as number;
  }
  public ProductSales$(options?: ODataQueryableOptions<number>) {
    return this.fetchAttribute<number>('ProductSales', options) as Observable<number>;
  }

  // #region Custom
  // #endregion Custom
}
// #region Custom
// #endregion Custom
