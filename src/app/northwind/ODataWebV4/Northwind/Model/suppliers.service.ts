import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { Supplier } from '../../../NorthwindModel/supplier.entity';

@Injectable()
export class SuppliersService extends ODataEntitySetService<Supplier> {
  constructor(client: ODataClient) {
    super(client, 'Suppliers', 'NorthwindModel.Supplier');
  }
  supplierModel(entity?: Partial<Supplier>) {
    return this.model(entity);
  }
  supplierCollection(entities?: Partial<Supplier>[]) {
    return this.collection(entities);
  }
}
