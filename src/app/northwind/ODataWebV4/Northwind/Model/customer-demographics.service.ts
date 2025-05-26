import { Injectable } from '@angular/core';
import { ODataClient, 
  ODataActionResource, 
  ODataActionOptions, 
  ODataFunctionResource, 
  ODataFunctionOptions, 
  ODataEntitySetService, 
  ODataOptions,
  EntityKey } from 'angular-odata';
import { CustomerDemographic } from '../../../NorthwindModel/customer-demographic.entity';

@Injectable()
export class CustomerDemographicsService extends ODataEntitySetService<CustomerDemographic> {
  constructor(client: ODataClient) {
    super(client, 'CustomerDemographics', 'NorthwindModel.CustomerDemographic');
  }
  customerDemographicModel(entity?: Partial<CustomerDemographic>) {
    return this.model(entity);
  }
  customerDemographicCollection(entities?: Partial<CustomerDemographic>[]) {
    return this.collection(entities);
  }
}
