import { Injectable } from '@angular/core';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region AngularOData Imports
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
  Expand, 
  Select,
  HttpOptions,
  HttpQueryOptions
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Address } from './address.complex';
import { Supplier } from './supplier.entity';
import { AddressModel } from './address.model';
import { SupplierModel } from './supplier.model';
import { AddressCollection } from './address.collection';
import { SupplierCollection } from './supplier.collection';
//#endregion

@Injectable()
export class SuppliersService extends ODataEntitySetService<Supplier> {
  constructor(protected client: ODataClient) {
    super(client, 'Suppliers', 'ODataDemo.Supplier');
  }
  //#region ODataApi Model
  supplierModel(attrs?: Partial<Supplier>): SupplierModel<Supplier> {
    return this.entity().asModel<SupplierModel<Supplier>>(attrs || {});
  }//#endregion
  //#region ODataApi Collection
  supplierCollection(models?: Partial<Supplier>[]): SupplierCollection<Supplier, SupplierModel<Supplier>> {
    return this.entities().asCollection<SupplierModel<Supplier>, SupplierCollection<Supplier, SupplierModel<Supplier>>>(models || []);
  }//#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}
