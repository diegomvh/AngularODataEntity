import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { CurrentProductList } from './current_product_list.entity';
import { CurrentProductListModel } from './current_product_list.model';
import { CurrentProductListCollection } from './current_product_list.collection';
//#endregion

export const CurrentProductListConfig = {
  name: "CurrentProductList",
  model: CurrentProductListModel,
  collection: CurrentProductListCollection,
  annotations: [],
  fields: {
    productID: {name: 'ProductID', type: 'Edm.Int32', key: true, ref: 'productID', nullable: false},
    productName: {name: 'ProductName', type: 'Edm.String', key: true, ref: 'productName', nullable: false, maxLength: 40}
  }
} as EntityConfig<CurrentProductList>;