import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Customer } from './customer.entity';
//#endregion

export const CustomerConfig = {
  name: "Customer",
  annotations: [],
  fields: {
    CustomerID: {type: 'string', key: true, ref: 'CustomerID', nullable: false, maxLength: 5},
    CompanyName: {type: 'string', nullable: false, maxLength: 40},
    ContactName: {type: 'string', maxLength: 30},
    ContactTitle: {type: 'string', maxLength: 30},
    Address: {type: 'string', maxLength: 60},
    City: {type: 'string', maxLength: 15},
    Region: {type: 'string', maxLength: 15},
    PostalCode: {type: 'string', maxLength: 10},
    Country: {type: 'string', maxLength: 15},
    Phone: {type: 'string', maxLength: 24},
    Fax: {type: 'string', maxLength: 24},
    Orders: {type: 'NorthwindModel.Order', collection: true, navigation: true},
    CustomerDemographics: {type: 'NorthwindModel.CustomerDemographic', collection: true, navigation: true}
  }
} as EntityConfig<Customer>;