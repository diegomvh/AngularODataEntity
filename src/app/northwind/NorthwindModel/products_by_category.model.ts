import { ODataModel, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { ProductsByCategory } from './products_by_category.entity';
import { ProductsByCategoryCollection } from './products_by_category.collection';
//#endregion

export class ProductsByCategoryModel<E extends ProductsByCategory> extends ODataModel<E> {
  //#region ODataApi Properties
  categoryName: string;
  productName: string;
  quantityPerUnit?: string;
  unitsInStock?: number;
  discontinued: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}