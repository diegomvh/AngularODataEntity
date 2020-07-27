import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataEntityService, 
  ODataEntityAnnotations, 
  ODataEntitiesAnnotations, 
  ODataPropertyAnnotations, 
  EntityKey,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Sales_by_Category } from '../../../NorthwindModel/sales_by_category.entity';
//#endregion

@Injectable()
export class Sales_by_CategoriesService extends ODataEntityService<Sales_by_Category> {
  static path: string = 'Sales_by_Categories';
  static type: string = 'ODataWebExperimental.Northwind.Model.Sales_by_Categories';
  static entityType: string = 'NorthwindModel.Sales_by_Category';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
