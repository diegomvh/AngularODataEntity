import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { SalesByCategory } from './sales_by_category.entity';
import { SalesByCategoryCollection } from './sales_by_category.collection';
//#endregion

export class SalesByCategoryModel<E extends SalesByCategory> extends ODataModel<E> {
  //#region ODataApi Properties
  CategoryID: number;
  CategoryName: string;
  ProductName: string;
  ProductSales?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}