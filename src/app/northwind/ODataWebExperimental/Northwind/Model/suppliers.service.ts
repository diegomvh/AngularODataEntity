import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  ODataEntityResource,
  ODataEntitySetResource,
  ODataNavigationPropertyResource,
  ODataActionResource,
  ODataFunctionResource,
  HttpOptions
} from 'angular-odata';

//#region ODataApi Imports
import { Product } from '../../../NorthwindModel/product.entity';
import { Supplier } from '../../../NorthwindModel/supplier.entity';
//#endregion

@Injectable()
export class SuppliersService extends ODataService<Supplier> {
  constructor(protected client: ODataClient) {
    super(client, 'Suppliers', 'NorthwindModel.Supplier');
  }

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
