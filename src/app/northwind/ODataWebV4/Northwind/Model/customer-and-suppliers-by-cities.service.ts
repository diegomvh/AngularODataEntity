import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { CustomerAndSuppliersByCity } from '../../../NorthwindModel/customer-and-suppliers-by-city.entity';

@Injectable()
export class CustomerAndSuppliersByCitiesService extends ODataEntitySetService<CustomerAndSuppliersByCity> {
  constructor(client: ODataClient) {
    super(client, 'Customer_and_Suppliers_by_Cities', 'NorthwindModel.Customer_and_Suppliers_by_City');
  }
  customerAndSuppliersByCityModel(entity?: Partial<CustomerAndSuppliersByCity>) {
    return this.model(entity);
  }
  customerAndSuppliersByCityCollection(entities?: Partial<CustomerAndSuppliersByCity>[]) {
    return this.collection(entities);
  }
}
