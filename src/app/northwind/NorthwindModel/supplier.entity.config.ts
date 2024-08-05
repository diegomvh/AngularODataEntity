//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Supplier } from './supplier.entity';
import { SupplierModel } from './supplier.model';
import { SupplierCollection } from './supplier.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const SupplierEntityConfig = {
  name: 'Supplier',
  model: SupplierModel,
  collection: SupplierCollection,
  keys: [{name: 'SupplierID'}],
  fields: {
    SupplierID: {type: 'Edm.Int32', nullable: false},
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
    HomePage: {type: 'Edm.String'},
    Products: {type: 'NorthwindModel.Product', collection: true, navigation: true}
  }
} as StructuredTypeConfig;
//#endregion