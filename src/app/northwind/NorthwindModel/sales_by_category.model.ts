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
import { SalesByCategory } from './sales_by_category.entity';
import { SalesByCategoryCollection } from './sales_by_category.collection';
//#endregion

@Model()
export class SalesByCategoryModel<E extends SalesByCategory> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  CategoryID!: number;
  public $CategoryID() {
    return this.property<number>('CategoryID');
  }
  public getCategoryID(options?: ODataOptions) {
    return this.getValue<number>('CategoryID', options) as Observable<number>;
  }
  
  @ModelField()
  CategoryName!: string;
  public $CategoryName() {
    return this.property<string>('CategoryName');
  }
  public getCategoryName(options?: ODataOptions) {
    return this.getValue<string>('CategoryName', options) as Observable<string>;
  }
  
  @ModelField()
  ProductName!: string;
  public $ProductName() {
    return this.property<string>('ProductName');
  }
  public getProductName(options?: ODataOptions) {
    return this.getValue<string>('ProductName', options) as Observable<string>;
  }
  
  @ModelField()
  ProductSales?: number;
  public $ProductSales() {
    return this.property<number>('ProductSales');
  }
  public getProductSales(options?: ODataOptions) {
    return this.getValue<number>('ProductSales', options) as Observable<number>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}