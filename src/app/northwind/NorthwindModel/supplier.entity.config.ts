import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Supplier } from './supplier.entity';
//#endregion

export const SupplierConfig = {
  name: "Supplier",
  annotations: [],
  fields: {
    SupplierID: {type: 'Number', key: true, ref: 'SupplierID', nullable: false},
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
    HomePage: {type: 'String'},
    Products: {type: 'NorthwindModel.Product', collection: true, navigation: true}
  }
} as EntityConfig<Supplier>;