import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ProductsByCategory } from './products_by_category.entity';
import { ProductsByCategoryCollection } from './products_by_category.collection';
//#endregion

export class ProductsByCategoryModel<E extends ProductsByCategory> extends ODataModel<E> {
  //#region ODataApi Properties
  CategoryName!: string;
  ProductName!: string;
  QuantityPerUnit?: string;
  UnitsInStock?: number;
  Discontinued!: boolean;
  //#endregion
  //#region ODataApi Setters
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}