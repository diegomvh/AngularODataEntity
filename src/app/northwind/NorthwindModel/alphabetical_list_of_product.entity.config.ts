import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Alphabetical_list_of_product } from './alphabetical_list_of_product.entity';
//#endregion

export const Alphabetical_list_of_productConfig = {
  name: "Alphabetical_list_of_product",
  annotations: [],
  fields: {
    ProductID: {type: 'number', key: true, ref: 'ProductID', nullable: false},
    ProductName: {type: 'string', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    SupplierID: {type: 'number'},
    CategoryID: {type: 'number'},
    QuantityPerUnit: {type: 'string', maxLength: 20},
    UnitPrice: {type: 'number'},
    UnitsInStock: {type: 'number'},
    UnitsOnOrder: {type: 'number'},
    ReorderLevel: {type: 'number'},
    Discontinued: {type: 'boolean', key: true, ref: 'Discontinued', nullable: false},
    CategoryName: {type: 'string', key: true, ref: 'CategoryName', nullable: false, maxLength: 15}
  }
} as EntityConfig<Alphabetical_list_of_product>;