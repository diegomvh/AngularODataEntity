import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Category } from './category.entity';
import { CategoryModel } from './category.model';
import { CategoryCollection } from './category.collection';
//#endregion

export const CategoryConfig = {
  name: "Category",
  model: CategoryModel,
  collection: CategoryCollection,
  annotations: [],
  fields: {
    Key: {type: 'Edm.String', key: true, ref: 'Key', nullable: false},
    Title: {type: 'Edm.String'},
    Description: {type: 'Edm.String'},
    CategoryGroupID: {type: 'Edm.Int32'}
  }
} as EntityConfig<Category>;