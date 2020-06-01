import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Product } from './product.entity';
//#endregion

export const ProductConfig = {
  name: "Product",
  annotations: [],
  fields: {
    ProductID: {type: 'number', key: true, ref: 'ProductID', nullable: false},
    ProductName: {type: 'string', nullable: false, maxLength: 40},
    SupplierID: {type: 'number'},
    CategoryID: {type: 'number'},
    QuantityPerUnit: {type: 'string', maxLength: 20},
    UnitPrice: {type: 'number'},
    UnitsInStock: {type: 'number'},
    UnitsOnOrder: {type: 'number'},
    ReorderLevel: {type: 'number'},
    Discontinued: {type: 'boolean', nullable: false},
    Category: {type: 'NorthwindModel.Category', navigation: true, field: 'CategoryID', ref: 'CategoryID'},
    Order_Details: {type: 'NorthwindModel.Order_Detail', collection: true, navigation: true},
    Supplier: {type: 'NorthwindModel.Supplier', navigation: true, field: 'SupplierID', ref: 'SupplierID'}
  }
} as EntityConfig<Product>;