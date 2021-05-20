import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProductSalesFor1997 } from './product_sales_for_1997.entity';
import { ProductSalesFor1997Model } from './product_sales_for_1997.model';
import { ProductSalesFor1997Collection } from './product_sales_for_1997.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const ProductSalesFor1997EntityConfig = {
  name: "Product_Sales_for_1997",
  model: ProductSalesFor1997Model,
  collection: ProductSalesFor1997Collection,
  keys: [{ref: 'CategoryName'},{ref: 'ProductName'}],
  fields: {
    CategoryName: {type: 'Edm.String', nullable: false, maxLength: 15},
    ProductName: {type: 'Edm.String', nullable: false, maxLength: 40},
    ProductSales: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as StructuredTypeConfig<ProductSalesFor1997>;
//#endregion