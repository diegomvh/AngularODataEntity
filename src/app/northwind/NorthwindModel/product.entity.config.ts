//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ProductEntityConfig = {
  name: "Product",
  model: ProductModel,
  collection: ProductCollection,
  keys: [{name: 'ProductID'}],
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
    Category: {type: 'NorthwindModel.Category', navigation: true, referentials: [{property: 'CategoryID', referencedProperty: 'CategoryID'}]},
    Order_Details: {type: 'NorthwindModel.Order_Detail', collection: true, navigation: true},
    Supplier: {type: 'NorthwindModel.Supplier', navigation: true, referentials: [{property: 'SupplierID', referencedProperty: 'SupplierID'}]}
  }
} as StructuredTypeConfig<Product>;
//#endregion