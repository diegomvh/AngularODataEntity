import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CustomerDemographic } from './customerdemographic.entity';
//#endregion

export const CustomerDemographicConfig = {
  name: "CustomerDemographic",
  annotations: [],
  fields: {
    CustomerTypeID: {type: 'Edm.String', key: true, ref: 'CustomerTypeID', nullable: false, maxLength: 10},
    CustomerDesc: {type: 'Edm.String'},
    Customers: {type: 'NorthwindModel.Customer', collection: true, navigation: true}
  }
} as EntityConfig<CustomerDemographic>;