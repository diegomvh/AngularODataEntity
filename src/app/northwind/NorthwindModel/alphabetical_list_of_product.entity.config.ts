import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AlphabeticalListOfProduct } from './alphabetical_list_of_product.entity';
//#endregion

export const AlphabeticalListOfProductConfig = {
  name: "Alphabetical_list_of_product",
  annotations: [],
  fields: {
    ProductID: {type: 'Edm.Int32', key: true, ref: 'ProductID', nullable: false},
    ProductName: {type: 'Edm.String', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    SupplierID: {type: 'Edm.Int32'},
    CategoryID: {type: 'Edm.Int32'},
    QuantityPerUnit: {type: 'Edm.String', maxLength: 20},
    UnitPrice: {type: 'Edm.Decimal', precition: 19, scale: 4},
    UnitsInStock: {type: 'Edm.Int16'},
    UnitsOnOrder: {type: 'Edm.Int16'},
    ReorderLevel: {type: 'Edm.Int16'},
    Discontinued: {type: 'Edm.Boolean', key: true, ref: 'Discontinued', nullable: false},
    CategoryName: {type: 'Edm.String', key: true, ref: 'CategoryName', nullable: false, maxLength: 15}
  }
} as EntityConfig<AlphabeticalListOfProduct>;