import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { ODataEntityService, ODataEntityAnnotations, ODataEntitiesAnnotations, EntityKey, ODataValueAnnotations, ODataEntityResource, ODataEntitySetResource, ODataNavigationPropertyResource, HttpOptions } from 'angular-odata';

//#region ODataApi Imports
import { Product } from '../../../NorthwindModel/product.entity';
import { Supplier } from '../../../NorthwindModel/supplier.entity';
//#endregion

@Injectable()
export class SuppliersService extends ODataEntityService<Supplier> {
  static path: string = 'Suppliers';
  static type: string = 'ODataWebExperimental.Northwind.Model.Suppliers';
  static entity: string = 'NorthwindModel.Supplier';

  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  public products(entity: EntityKey<Supplier>): ODataNavigationPropertyResource<Product> {
    return this.entity(entity).navigationProperty<Product>('Products');
  }
  //#endregion
}
