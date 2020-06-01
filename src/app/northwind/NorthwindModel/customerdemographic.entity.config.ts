import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CustomerDemographic } from './customerdemographic.entity';
//#endregion

export const CustomerDemographicConfig = {
  name: "CustomerDemographic",
  annotations: [],
  fields: {
    CustomerTypeID: {type: 'string', key: true, ref: 'CustomerTypeID', nullable: false, maxLength: 10},
    CustomerDesc: {type: 'string'},
    Customers: {type: 'NorthwindModel.Customer', collection: true, navigation: true}
  }
} as EntityConfig<CustomerDemographic>;