//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { CurrentProductList } from './current_product_list.entity';
import { CurrentProductListModel } from './current_product_list.model';
import { CurrentProductListCollection } from './current_product_list.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CurrentProductListEntityConfig = {
  name: 'Current_Product_List',
  model: CurrentProductListModel,
  collection: CurrentProductListCollection,
  keys: [{name: 'ProductID'},{name: 'ProductName'}],
  fields: {
    ProductID: {type: 'Edm.Int32', nullable: false},
    ProductName: {type: 'Edm.String', nullable: false, maxLength: 40}
  }
} as StructuredTypeConfig<CurrentProductList>;
//#endregion