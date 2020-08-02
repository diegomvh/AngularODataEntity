import { EntityConfig } from 'angular-odata';

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
    customerID: {name: 'CustomerID', type: 'Edm.String', key: true, ref: 'customerID', nullable: false, maxLength: 5},
    companyName: {name: 'CompanyName', type: 'Edm.String', nullable: false, maxLength: 40},
    contactName: {name: 'ContactName', type: 'Edm.String', maxLength: 30},
    contactTitle: {name: 'ContactTitle', type: 'Edm.String', maxLength: 30},
    address: {name: 'Address', type: 'Edm.String', maxLength: 60},
    city: {name: 'City', type: 'Edm.String', maxLength: 15},
    region: {name: 'Region', type: 'Edm.String', maxLength: 15},
    postalCode: {name: 'PostalCode', type: 'Edm.String', maxLength: 10},
    country: {name: 'Country', type: 'Edm.String', maxLength: 15},
    phone: {name: 'Phone', type: 'Edm.String', maxLength: 24},
    fax: {name: 'Fax', type: 'Edm.String', maxLength: 24},
    orders: {name: 'Orders', type: 'NorthwindModel.Order', collection: true, navigation: true},
    customerDemographics: {name: 'CustomerDemographics', type: 'NorthwindModel.CustomerDemographic', collection: true, navigation: true}
  }
} as EntityConfig<Customer>;