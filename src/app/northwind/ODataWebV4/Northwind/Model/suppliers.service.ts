import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { SupplierModel } from '../../../NorthwindModel/supplier.model';
import { SupplierCollection } from '../../../NorthwindModel/supplier.collection';
import { Supplier } from '../../../NorthwindModel/supplier.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class SuppliersService extends ODataEntitySetService<Supplier> {
  constructor(client: ODataClient) {
    super(client, 'Suppliers', 'NorthwindModel.Supplier');
  }
  supplierModel(entity?: Partial<Supplier>) {
    return this.model<SupplierModel<Supplier>>(entity);
  }
  supplierCollection(entities?: Partial<Supplier>[]) {
    return this.collection<SupplierModel<Supplier>, SupplierCollection<Supplier, SupplierModel<Supplier>>>(entities);
  }
// #region Custom
// #endregion Custom
}
