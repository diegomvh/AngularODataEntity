import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Customer } from './customer.entity';
import { CustomerModel } from './customer.model';
import { CustomerCollection } from './customer.collection';
//#endregion

export const CustomerConfig = {
  name: "Customer",
  model: CustomerModel,
  collection: CustomerCollection,
  annotations: [],
  fields: {
    CustomerID: {type: 'Edm.String', key: true, ref: 'CustomerID', nullable: false, maxLength: 5},
    CompanyName: {type: 'Edm.String', nullable: false, maxLength: 40},
    ContactName: {type: 'Edm.String', maxLength: 30},
    ContactTitle: {type: 'Edm.String', maxLength: 30},
    Address: {type: 'Edm.String', maxLength: 60},
    City: {type: 'Edm.String', maxLength: 15},
    Region: {type: 'Edm.String', maxLength: 15},
    PostalCode: {type: 'Edm.String', maxLength: 10},
    Country: {type: 'Edm.String', maxLength: 15},
    Phone: {type: 'Edm.String', maxLength: 24},
    Fax: {type: 'Edm.String', maxLength: 24},
    Orders: {type: 'NorthwindModel.Order', collection: true, navigation: true},
    CustomerDemographics: {type: 'NorthwindModel.CustomerDemographic', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Customer>;