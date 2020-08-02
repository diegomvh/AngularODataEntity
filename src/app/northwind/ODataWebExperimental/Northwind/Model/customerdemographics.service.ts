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
import { CustomerDemographic } from '../../../NorthwindModel/customerdemographic.entity';
import { Customer } from '../../../NorthwindModel/customer.entity';
import { CustomerDemographicModel } from '../../../NorthwindModel/customerdemographic.model';
import { CustomerModel } from '../../../NorthwindModel/customer.model';
import { CustomerDemographicCollection } from '../../../NorthwindModel/customerdemographic.collection';
import { CustomerCollection } from '../../../NorthwindModel/customer.collection';
//#endregion

@Injectable()
export class CustomerDemographicsService extends ODataService<CustomerDemographic> {
  constructor(protected client: ODataClient) {
    super(client, 'CustomerDemographics', 'NorthwindModel.CustomerDemographic');
  }

  customerDemographicModel(): CustomerDemographicModel<CustomerDemographic> {
    return super.model() as CustomerDemographicModel<CustomerDemographic>;
  }
  
  customerDemographicsCollection(): CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>> {
    return super.collection() as CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>>;
  }
}
