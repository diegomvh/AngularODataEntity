import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const ProductConfig = {
  name: "Product",
  model: ProductModel,
  collection: ProductCollection,
  annotations: [],
  fields: {
    ProductID: {type: 'Edm.Int32', key: true, ref: 'ProductID', nullable: false},
    ProductName: {type: 'Edm.String', nullable: false, maxLength: 40},
    SupplierID: {type: 'Edm.Int32'},
    CategoryID: {type: 'Edm.Int32'},
    QuantityPerUnit: {type: 'Edm.String', maxLength: 20},
    UnitPrice: {type: 'Edm.Decimal', precition: 19, scale: 4},
    UnitsInStock: {type: 'Edm.Int16'},
    UnitsOnOrder: {type: 'Edm.Int16'},
    ReorderLevel: {type: 'Edm.Int16'},
    Discontinued: {type: 'Edm.Boolean', nullable: false},
    Category: {type: 'NorthwindModel.Category', navigation: true, field: 'CategoryID', ref: 'CategoryID'},
    Order_Details: {type: 'NorthwindModel.Order_Detail', collection: true, navigation: true},
    Supplier: {type: 'NorthwindModel.Supplier', navigation: true, field: 'SupplierID', ref: 'SupplierID'}
  }
} as StructuredTypeConfig<Product>;
//#endregion