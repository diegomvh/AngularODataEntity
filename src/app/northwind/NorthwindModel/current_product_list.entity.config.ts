import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { CurrentProductList } from './current_product_list.entity';
import { CurrentProductListModel } from './current_product_list.model';
import { CurrentProductListCollection } from './current_product_list.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const CurrentProductListConfig = {
  name: "Current_Product_List",
  model: CurrentProductListModel,
  collection: CurrentProductListCollection,
  annotations: [],
  fields: {
    ProductID: {type: 'Edm.Int32', key: true, ref: 'ProductID', nullable: false},
    ProductName: {type: 'Edm.String', key: true, ref: 'ProductName', nullable: false, maxLength: 40}
  }
} as StructuredTypeConfig<CurrentProductList>;
//#endregion