import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { 
  ODataClient,
  ODataEntityService, 
  ODataEntity, 
  ODataEntities, 
  ODataProperty, 
  EntityKey,
  Duration,
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
import { ProductModel } from '../../../NorthwindModel/product.model';
import { SupplierModel } from '../../../NorthwindModel/supplier.model';
import { ProductCollection } from '../../../NorthwindModel/product.collection';
import { SupplierCollection } from '../../../NorthwindModel/supplier.collection';
//#endregion

@Injectable()
export class SuppliersService extends ODataEntityService<Supplier> {
  constructor(protected client: ODataClient) {
    super(client, 'Suppliers', 'NorthwindModel.Supplier');
  }

  //#region ODataApi Model
  supplierModel(): SupplierModel<Supplier> {
    return this.entity().asModel() as SupplierModel<Supplier>;
  }
  //#endregion
  //#region ODataApi Collection
  supplierCollection(): SupplierCollection<Supplier, SupplierModel<Supplier>> {
    return this.entities().asCollection() as SupplierCollection<Supplier, SupplierModel<Supplier>>;
  }
  //#endregion
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
