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
import { CategorySalesFor1997 } from './category_sales_for_1997.entity';
import { CategorySalesFor1997Collection } from './category_sales_for_1997.collection';
//#endregion

@Model()
export class CategorySalesFor1997Model<E extends CategorySalesFor1997> extends ODataModel<E> {
  //#region ODataApiGen Properties
  @ModelField()
  CategoryName!: string;
  public $CategoryName() {
    return this.property<string>('CategoryName');
  }
  public getCategoryName(options?: ODataOptions) {
    return this.getValue<string>('CategoryName', options) as Observable<string>;
  }
  
  @ModelField()
  CategorySales?: number;
  public $CategorySales() {
    return this.property<number>('CategorySales');
  }
  public getCategorySales(options?: ODataOptions) {
    return this.getValue<number>('CategorySales', options) as Observable<number>;
  }
  
  //#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  //#endregion
}