import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Supplier } from './supplier.entity';
//#endregion

export const SupplierConfig = {
  name: "Supplier",
  annotations: [],
  fields: {
    SupplierID: {type: 'number', key: true, ref: 'SupplierID', nullable: false},
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
    HomePage: {type: 'string'},
    Products: {type: 'NorthwindModel.Product', collection: true, navigation: true}
  }
} as EntityConfig<Supplier>;