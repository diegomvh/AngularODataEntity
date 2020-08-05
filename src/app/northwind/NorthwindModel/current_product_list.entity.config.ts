import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CurrentProductList } from './current_product_list.entity';
//#endregion

export const CurrentProductListConfig = {
  name: "Current_Product_List",
  annotations: [],
  fields: {
    ProductID: {type: 'Edm.Int32', key: true, ref: 'ProductID', nullable: false},
    ProductName: {type: 'Edm.String', key: true, ref: 'ProductName', nullable: false, maxLength: 40}
  }
} as EntityConfig<CurrentProductList>;