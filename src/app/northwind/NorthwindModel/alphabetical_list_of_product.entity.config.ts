import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AlphabeticalListOfProduct } from './alphabetical_list_of_product.entity';
import { AlphabeticalListOfProductModel } from './alphabetical_list_of_product.model';
import { AlphabeticalListOfProductCollection } from './alphabetical_list_of_product.collection';
//#endregion

export const AlphabeticalListOfProductConfig = {
  name: "AlphabeticalListOfProduct",
  model: AlphabeticalListOfProductModel,
  collection: AlphabeticalListOfProductCollection,
  annotations: [],
  fields: {
    productID: {name: 'ProductID', type: 'Edm.Int32', key: true, ref: 'productID', nullable: false},
    productName: {name: 'ProductName', type: 'Edm.String', key: true, ref: 'productName', nullable: false, maxLength: 40},
    supplierID: {name: 'SupplierID', type: 'Edm.Int32'},
    categoryID: {name: 'CategoryID', type: 'Edm.Int32'},
    quantityPerUnit: {name: 'QuantityPerUnit', type: 'Edm.String', maxLength: 20},
    unitPrice: {name: 'UnitPrice', type: 'Edm.Decimal', precition: 19, scale: 4},
    unitsInStock: {name: 'UnitsInStock', type: 'Edm.Int16'},
    unitsOnOrder: {name: 'UnitsOnOrder', type: 'Edm.Int16'},
    reorderLevel: {name: 'ReorderLevel', type: 'Edm.Int16'},
    discontinued: {name: 'Discontinued', type: 'Edm.Boolean', key: true, ref: 'discontinued', nullable: false},
    categoryName: {name: 'CategoryName', type: 'Edm.String', key: true, ref: 'categoryName', nullable: false, maxLength: 15}
  }
} as EntityConfig<AlphabeticalListOfProduct>;