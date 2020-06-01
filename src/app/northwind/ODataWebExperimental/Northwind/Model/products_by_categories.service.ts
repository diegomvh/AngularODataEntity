import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, EntityKey, ODataValueAnnotations, ODataEntityResource, ODataEntitySetResource, ODataNavigationPropertyResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
import { Products_by_Category } from '../../../NorthwindModel/products_by_category.entity';
//#endregion

@Injectable()
export class Products_by_CategoriesService extends ODataEntityService<Products_by_Category> {
  static path: string = 'Products_by_Categories';
  static type: string = 'ODataWebExperimental.Northwind.Model.Products_by_Categories';
  static entity: string = 'NorthwindModel.Products_by_Category';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
