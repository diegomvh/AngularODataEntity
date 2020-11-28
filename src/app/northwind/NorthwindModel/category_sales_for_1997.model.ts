import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { CategorySalesFor1997 } from './category_sales_for_1997.entity';
import { CategorySalesFor1997Collection } from './category_sales_for_1997.collection';
//#endregion

export class CategorySalesFor1997Model<E extends CategorySalesFor1997> extends ODataModel<E> {
  //#region ODataApi Properties
  CategoryName: string;
  CategorySales?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}