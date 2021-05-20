import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const ProductEntityConfig = {
  name: "Product",
  model: ProductModel,
  collection: ProductCollection,
  keys: [{ref: 'ProductID'}],
  fields: {
    ProductID: {type: 'Edm.Int32', nullable: false},
    ProductName: {type: 'Edm.String', nullable: false, maxLength: 40},
    SupplierID: {type: 'Edm.Int32'},
    CategoryID: {type: 'Edm.Int32'},
    QuantityPerUnit: {type: 'Edm.String', maxLength: 20},
    UnitPrice: {type: 'Edm.Decimal', precition: 19, scale: 4},
    UnitsInStock: {type: 'Edm.Int16'},
    UnitsOnOrder: {type: 'Edm.Int16'},
    ReorderLevel: {type: 'Edm.Int16'},
    Discontinued: {type: 'Edm.Boolean', nullable: false},
    Category: {type: 'NorthwindModel.Category', navigation: true, referential: 'CategoryID', referenced: 'CategoryID'},
    Order_Details: {type: 'NorthwindModel.Order_Detail', collection: true, navigation: true},
    Supplier: {type: 'NorthwindModel.Supplier', navigation: true, referential: 'SupplierID', referenced: 'SupplierID'}
  }
} as StructuredTypeConfig<Product>;
//#endregion