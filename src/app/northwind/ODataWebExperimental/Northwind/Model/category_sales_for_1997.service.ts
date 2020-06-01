import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, EntityKey, ODataValueAnnotations, ODataEntityResource, ODataEntitySetResource, ODataNavigationPropertyResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
import { Category_Sales_for_1997 } from '../../../NorthwindModel/category_sales_for_1997.entity';
//#endregion

@Injectable()
export class Category_Sales_for_1997Service extends ODataEntityService<Category_Sales_for_1997> {
  static path: string = 'Category_Sales_for_1997';
  static type: string = 'ODataWebExperimental.Northwind.Model.Category_Sales_for_1997';
  static entity: string = 'NorthwindModel.Category_Sales_for_1997';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
