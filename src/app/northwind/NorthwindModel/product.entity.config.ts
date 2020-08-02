import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Product } from './product.entity';
import { ProductModel } from './product.model';
import { ProductCollection } from './product.collection';
//#endregion

export const ProductConfig = {
  name: "Product",
  model: ProductModel,
  collection: ProductCollection,
  annotations: [],
  fields: {
    productID: {name: 'ProductID', type: 'Edm.Int32', key: true, ref: 'productID', nullable: false},
    productName: {name: 'ProductName', type: 'Edm.String', nullable: false, maxLength: 40},
    supplierID: {name: 'SupplierID', type: 'Edm.Int32'},
    categoryID: {name: 'CategoryID', type: 'Edm.Int32'},
    quantityPerUnit: {name: 'QuantityPerUnit', type: 'Edm.String', maxLength: 20},
    unitPrice: {name: 'UnitPrice', type: 'Edm.Decimal', precition: 19, scale: 4},
    unitsInStock: {name: 'UnitsInStock', type: 'Edm.Int16'},
    unitsOnOrder: {name: 'UnitsOnOrder', type: 'Edm.Int16'},
    reorderLevel: {name: 'ReorderLevel', type: 'Edm.Int16'},
    discontinued: {name: 'Discontinued', type: 'Edm.Boolean', nullable: false},
    category: {name: 'Category', type: 'NorthwindModel.Category', navigation: true, field: 'CategoryID', ref: 'CategoryID'},
    orderDetails: {name: 'Order_Details', type: 'NorthwindModel.Order_Detail', collection: true, navigation: true},
    supplier: {name: 'Supplier', type: 'NorthwindModel.Supplier', navigation: true, field: 'SupplierID', ref: 'SupplierID'}
  }
} as EntityConfig<Product>;