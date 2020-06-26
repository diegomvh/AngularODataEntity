import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Alphabetical_list_of_product } from './alphabetical_list_of_product.entity';
//#endregion

export const Alphabetical_list_of_productConfig = {
  name: "Alphabetical_list_of_product",
  annotations: [],
  fields: {
    ProductID: {type: 'Number', key: true, ref: 'ProductID', nullable: false},
    ProductName: {type: 'String', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    SupplierID: {type: 'Number'},
    CategoryID: {type: 'Number'},
    QuantityPerUnit: {type: 'String', maxLength: 20},
    UnitPrice: {type: 'Decimal', precition: 19, scale: 4},
    UnitsInStock: {type: 'Number'},
    UnitsOnOrder: {type: 'Number'},
    ReorderLevel: {type: 'Number'},
    Discontinued: {type: 'Boolean', key: true, ref: 'Discontinued', nullable: false},
    CategoryName: {type: 'String', key: true, ref: 'CategoryName', nullable: false, maxLength: 15}
  }
} as EntityConfig<Alphabetical_list_of_product>;