import { StructuredTypeConfig } from 'angular-odata';

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
    CategoryID: {type: 'Edm.Int32', key: true, ref: 'CategoryID', nullable: false},
    CategoryName: {type: 'Edm.String', nullable: false, maxLength: 15},
    Description: {type: 'Edm.String'},
    Picture: {type: 'Edm.Binary'},
    Products: {type: 'NorthwindModel.Product', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Category>;