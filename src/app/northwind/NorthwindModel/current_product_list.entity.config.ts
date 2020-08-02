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
    ProductID: {type: 'Edm.Int32', key: true, ref: 'ProductID', nullable: false},
    ProductName: {type: 'Edm.String', key: true, ref: 'ProductName', nullable: false, maxLength: 40}
  }
} as EntityConfig<CurrentProductList>;