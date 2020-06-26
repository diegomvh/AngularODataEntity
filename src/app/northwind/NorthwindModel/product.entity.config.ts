import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Product } from './product.entity';
//#endregion

export const ProductConfig = {
  name: "Product",
  annotations: [],
  fields: {
    ProductID: {type: 'Number', key: true, ref: 'ProductID', nullable: false},
    ProductName: {type: 'String', nullable: false, maxLength: 40},
    SupplierID: {type: 'Number'},
    CategoryID: {type: 'Number'},
    QuantityPerUnit: {type: 'String', maxLength: 20},
    UnitPrice: {type: 'Decimal', precition: 19, scale: 4},
    UnitsInStock: {type: 'Number'},
    UnitsOnOrder: {type: 'Number'},
    ReorderLevel: {type: 'Number'},
    Discontinued: {type: 'Boolean', nullable: false},
    Category: {type: 'NorthwindModel.Category', navigation: true, field: 'CategoryID', ref: 'CategoryID'},
    Order_Details: {type: 'NorthwindModel.Order_Detail', collection: true, navigation: true},
    Supplier: {type: 'NorthwindModel.Supplier', navigation: true, field: 'SupplierID', ref: 'SupplierID'}
  }
} as EntityConfig<Product>;