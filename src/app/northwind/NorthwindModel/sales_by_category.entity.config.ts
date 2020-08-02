import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SalesByCategory } from './sales_by_category.entity';
//#endregion

export const SalesByCategoryConfig = {
  name: "SalesByCategory",
  annotations: [],
  fields: {
    CategoryID: {type: 'Edm.Int32', key: true, ref: 'CategoryID', nullable: false},
    CategoryName: {type: 'Edm.String', key: true, ref: 'CategoryName', nullable: false, maxLength: 15},
    ProductName: {type: 'Edm.String', key: true, ref: 'ProductName', nullable: false, maxLength: 40},
    ProductSales: {type: 'Edm.Decimal', precition: 19, scale: 4}
  }
} as EntityConfig<SalesByCategory>;