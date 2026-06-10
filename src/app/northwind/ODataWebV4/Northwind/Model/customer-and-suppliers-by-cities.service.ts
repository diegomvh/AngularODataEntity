import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { CustomerAndSuppliersByCityModel } from '../../../NorthwindModel/customer-and-suppliers-by-city.model';
import { CustomerAndSuppliersByCityCollection } from '../../../NorthwindModel/customer-and-suppliers-by-city.collection';
import { CustomerAndSuppliersByCity } from '../../../NorthwindModel/customer-and-suppliers-by-city.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class CustomerAndSuppliersByCitiesService extends ODataEntitySetService<CustomerAndSuppliersByCity> {
  constructor(client: ODataClient) {
    super(client, 'Customer_and_Suppliers_by_Cities', 'NorthwindModel.Customer_and_Suppliers_by_City');
  }
  customerAndSuppliersByCityModel(entity?: Partial<CustomerAndSuppliersByCity>) {
    return this.model<CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>>(entity);
  }
  customerAndSuppliersByCityCollection(entities?: Partial<CustomerAndSuppliersByCity>[]) {
    return this.collection<CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>, CustomerAndSuppliersByCityCollection<CustomerAndSuppliersByCity, CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>>>(entities);
  }
// #region Custom
// #endregion Custom
}
