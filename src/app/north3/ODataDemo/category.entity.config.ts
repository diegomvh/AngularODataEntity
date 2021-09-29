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
  name: "Category",
  open: true,
  model: CategoryModel,
  collection: CategoryCollection,
  keys: [{name: 'ID'}],
  fields: {
    ID: {type: 'Edm.Int32', nullable: false},
    Name: {type: 'Edm.String'},
    Products: {type: 'ODataDemo.Product', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Category>;
//#endregion