import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CustomerDemographic } from './customerdemographic.entity';
import { CustomerDemographicModel } from './customerdemographic.model';
import { CustomerDemographicCollection } from './customerdemographic.collection';
//#endregion

export const CustomerDemographicConfig = {
  name: "CustomerDemographic",
  model: CustomerDemographicModel,
  collection: CustomerDemographicCollection,
  annotations: [],
  fields: {
    customerTypeID: {name: 'CustomerTypeID', type: 'Edm.String', key: true, ref: 'customerTypeID', nullable: false, maxLength: 10},
    customerDesc: {name: 'CustomerDesc', type: 'Edm.String'},
    customers: {name: 'Customers', type: 'NorthwindModel.Customer', collection: true, navigation: true}
  }
} as EntityConfig<CustomerDemographic>;