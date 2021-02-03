import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Category } from './category.entity';
import { CategoryModel } from './category.model';
import { CategoryCollection } from './category.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const CategoryEntityConfig = {
  name: "Category",
  open: true,
  model: CategoryModel,
  collection: CategoryCollection,
  annotations: [],
  fields: {
    ID: {type: 'Edm.Int32', key: true, ref: 'ID', nullable: false},
    Name: {type: 'Edm.String'},
    Products: {type: 'ODataDemo.Product', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Category>;
//#endregion