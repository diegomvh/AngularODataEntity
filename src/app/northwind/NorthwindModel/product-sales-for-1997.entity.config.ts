//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { ProductSalesFor1997 } from './product-sales-for-1997.entity';
import { ProductSalesFor1997Model } from './product-sales-for-1997.model';
import { ProductSalesFor1997Collection } from './product-sales-for-1997.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const ProductSalesFor1997EntityConfig = {
  name: 'Product_Sales_for_1997',
  model: ProductSalesFor1997Model,
  collection: ProductSalesFor1997Collection,
  keys: [{name: 'CategoryName'},{name: 'ProductName'}],
  fields: {
    CategoryName: {type: 'Edm.String', nullable: false, maxLength: 15},
    ProductName: {type: 'Edm.String', nullable: false, maxLength: 40},
    ProductSales: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as StructuredTypeConfig<ProductSalesFor1997>;
//#endregion