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
import { CustomerAndSuppliersByCity } from '../../../NorthwindModel/customer_and_suppliers_by_city.entity';
import { CustomerAndSuppliersByCityModel } from '../../../NorthwindModel/customer_and_suppliers_by_city.model';
import { CustomerAndSuppliersByCityCollection } from '../../../NorthwindModel/customer_and_suppliers_by_city.collection';
//#endregion

@Injectable()
export class CustomerAndSuppliersByCitiesService extends ODataService<CustomerAndSuppliersByCity> {
  constructor(protected client: ODataClient) {
    super(client, 'Customer_and_Suppliers_by_Cities', 'NorthwindModel.Customer_and_Suppliers_by_City');
  }

  customerAndSuppliersByCityModel(): CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity> {
    return super.model() as CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>;
  }
  
  customerAndSuppliersByCitiesCollection(): CustomerAndSuppliersByCityCollection<CustomerAndSuppliersByCity, CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>> {
    return super.collection() as CustomerAndSuppliersByCityCollection<CustomerAndSuppliersByCity, CustomerAndSuppliersByCityModel<CustomerAndSuppliersByCity>>;
  }
}
