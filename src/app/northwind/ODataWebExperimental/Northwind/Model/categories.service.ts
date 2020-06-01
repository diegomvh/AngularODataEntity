import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, EntityKey, ODataValueAnnotations, ODataEntityResource, ODataEntitySetResource, ODataNavigationPropertyResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
import { Category } from '../../../NorthwindModel/category.entity';
import { Product } from '../../../NorthwindModel/product.entity';
//#endregion

@Injectable()
export class CategoriesService extends ODataEntityService<Category> {
  static path: string = 'Categories';
  static type: string = 'ODataWebExperimental.Northwind.Model.Categories';
  static entity: string = 'NorthwindModel.Category';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public products(entity: EntityKey<Category>): ODataNavigationPropertyResource<Product> {
    return this.entity(entity).navigationProperty<Product>('Products');
  }
  //#endregion
}
