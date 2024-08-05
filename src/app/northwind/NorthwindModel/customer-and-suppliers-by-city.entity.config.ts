//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CustomerAndSuppliersByCity } from './customer-and-suppliers-by-city.entity';
import { CustomerAndSuppliersByCityModel } from './customer-and-suppliers-by-city.model';
import { CustomerAndSuppliersByCityCollection } from './customer-and-suppliers-by-city.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CustomerAndSuppliersByCityEntityConfig = {
  name: 'Customer_and_Suppliers_by_City',
  model: CustomerAndSuppliersByCityModel,
  collection: CustomerAndSuppliersByCityCollection,
  keys: [{name: 'CompanyName'},{name: 'Relationship'}],
  fields: {
    City: {type: 'Edm.String'},
    CompanyName: {type: 'Edm.String', nullable: false},
    ContactName: {type: 'Edm.String'},
    Relationship: {type: 'Edm.String', nullable: false}
  }
} as StructuredTypeConfig;
//#endregion