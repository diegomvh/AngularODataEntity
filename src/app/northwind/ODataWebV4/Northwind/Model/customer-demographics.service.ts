import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { CustomerDemographicModel } from '../../../NorthwindModel/customer-demographic.model';
import { CustomerDemographicCollection } from '../../../NorthwindModel/customer-demographic.collection';
import { CustomerDemographic } from '../../../NorthwindModel/customer-demographic.entity';

// #region Custom
// #endregion Custom
@Injectable()
export class CustomerDemographicsService extends ODataEntitySetService<CustomerDemographic> {
  constructor(client: ODataClient) {
    super(client, 'CustomerDemographics', 'NorthwindModel.CustomerDemographic');
  }
  customerDemographicModel(entity?: Partial<CustomerDemographic>) {
    return this.model<CustomerDemographicModel<CustomerDemographic>>(entity);
  }
  customerDemographicCollection(entities?: Partial<CustomerDemographic>[]) {
    return this.collection<CustomerDemographicModel<CustomerDemographic>, CustomerDemographicCollection<CustomerDemographic, CustomerDemographicModel<CustomerDemographic>>>(entities);
  }
// #region Custom
// #endregion Custom
}
