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
import { ProductSalesFor1997 } from './product-sales-for-1997.entity';
import { ProductSalesFor1997Collection } from './product-sales-for-1997.collection';
//#endregion

@Model()
export class ProductSalesFor1997Model<E extends ProductSalesFor1997> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  CategoryName!: string;
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
  ProductSales?: number;
  public $$ProductSales() {
    return this.property<number>('ProductSales');
  }
  public $ProductSales() {
    return this.getAttribute<number>('ProductSales') as number;
  }
  
  public ProductSales$(options?: ODataQueryArgumentsOptions<number>) {
    return this.fetchAttribute<number>('ProductSales', options) as Observable<number>;
  }
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}