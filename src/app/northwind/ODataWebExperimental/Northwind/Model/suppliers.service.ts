import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApiGen ODataImports
import {
  ODataClient,
  ODataEntitySetService,
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
  ODataOptions,
  ODataQueryArgumentsOptions
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Product } from '../../../NorthwindModel/product.entity';
import { Supplier } from '../../../NorthwindModel/supplier.entity';
import { ProductModel } from '../../../NorthwindModel/product.model';
import { SupplierModel } from '../../../NorthwindModel/supplier.model';
import { ProductCollection } from '../../../NorthwindModel/product.collection';
import { SupplierCollection } from '../../../NorthwindModel/supplier.collection';
//#endregion

@Injectable()
export class SuppliersService extends ODataEntitySetService<Supplier> {
  constructor(client: ODataClient) {
    super(client, 'Suppliers', 'NorthwindModel.Supplier');
  }
  //#region ODataApiGen Model
  supplierModel(attrs?: Partial<Supplier>): SupplierModel<Supplier> {
    return this.entity().asModel<SupplierModel<Supplier>>(attrs || {});
  }//#endregion
  //#region ODataApiGen Collection
  supplierCollection(models?: Partial<Supplier>[]): SupplierCollection<Supplier, SupplierModel<Supplier>> {
    return this.entities().asCollection<SupplierModel<Supplier>, SupplierCollection<Supplier, SupplierModel<Supplier>>>(models || []);
  }//#endregion
  //#region ODataApiGen Actions
  //#endregion
  //#region ODataApiGen Functions
  //#endregion
  //#region ODataApiGen Navigations
  public products(key: EntityKey<Supplier>): ODataNavigationPropertyResource<Product> { 
    return this.entity(key).navigationProperty<Product>('Products'); 
  }
  public fetchProducts(key: EntityKey<Supplier>, options?: ODataQueryArgumentsOptions<Product>) {
    return this.fetchNavigationProperty<Product>(
      this.products(key), 
      'entities', options) as Observable<ODataEntities<Product>>;
  }
  public addProductToProducts(key: EntityKey<Supplier>, target: ODataEntityResource<ODataEntities<Product>>, {etag}: {etag?: string} = {}): Observable<any> {
    return this.products(key).reference()
      .add(target);
  }
  public removeProductFromProducts(key: EntityKey<Supplier>, {target, etag}: {target?: ODataEntityResource<ODataEntities<Product>>, etag?: string} = {}): Observable<any> {
    return this.products(key).reference()
      .remove(target);
  }
  //#endregion
}
