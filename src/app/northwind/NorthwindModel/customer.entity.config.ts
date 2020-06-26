import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Customer } from './customer.entity';
//#endregion

export const CustomerConfig = {
  name: "Customer",
  annotations: [],
  fields: {
    CustomerID: {type: 'String', key: true, ref: 'CustomerID', nullable: false, maxLength: 5},
    CompanyName: {type: 'String', nullable: false, maxLength: 40},
    ContactName: {type: 'String', maxLength: 30},
    ContactTitle: {type: 'String', maxLength: 30},
    Address: {type: 'String', maxLength: 60},
    City: {type: 'String', maxLength: 15},
    Region: {type: 'String', maxLength: 15},
    PostalCode: {type: 'String', maxLength: 10},
    Country: {type: 'String', maxLength: 15},
    Phone: {type: 'String', maxLength: 24},
    Fax: {type: 'String', maxLength: 24},
    Orders: {type: 'NorthwindModel.Order', collection: true, navigation: true},
    CustomerDemographics: {type: 'NorthwindModel.CustomerDemographic', collection: true, navigation: true}
  }
} as EntityConfig<Customer>;