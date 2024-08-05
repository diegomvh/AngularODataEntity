//#region ODataApiGen ODataImports
import {
  StructuredTypeConfig
} from 'angular-odata';//#endregion

//#region ODataApiGen Imports
import { Category } from './category.entity';
import { CategoryModel } from './category.model';
import { CategoryCollection } from './category.collection';
//#endregion

//#region ODataApiGen StrucutredTypeConfig
export const CategoryEntityConfig = {
  name: 'Category',
  model: CategoryModel,
  collection: CategoryCollection,
  keys: [{name: 'CategoryID'}],
  fields: {
    CategoryID: {type: 'Edm.Int32', nullable: false},
    CategoryName: {type: 'Edm.String'},
    Description: {type: 'Edm.String'},
    Picture: {type: 'Edm.Binary'},
    Products: {type: 'NorthwindModel.Product', collection: true, navigation: true}
  }
} as StructuredTypeConfig;
//#endregion