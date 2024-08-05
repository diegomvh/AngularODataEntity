//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Customer } from './customer.entity';
import { CustomerModel } from './customer.model';
import { CustomerCollection } from './customer.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CustomerEntityConfig = {
  name: 'Customer',
  model: CustomerModel,
  collection: CustomerCollection,
  keys: [{name: 'CustomerID'}],
  fields: {
    CustomerID: {type: 'Edm.String', nullable: false},
    CompanyName: {type: 'Edm.String'},
    ContactName: {type: 'Edm.String'},
    ContactTitle: {type: 'Edm.String'},
    Address: {type: 'Edm.String'},
    City: {type: 'Edm.String'},
    Region: {type: 'Edm.String'},
    PostalCode: {type: 'Edm.String'},
    Country: {type: 'Edm.String'},
    Phone: {type: 'Edm.String'},
    Fax: {type: 'Edm.String'},
    Orders: {type: 'NorthwindModel.Order', collection: true, navigation: true},
    CustomerDemographics: {type: 'NorthwindModel.CustomerDemographic', collection: true, navigation: true}
  }
} as StructuredTypeConfig;
//#endregion