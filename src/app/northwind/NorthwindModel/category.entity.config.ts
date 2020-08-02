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
    categoryID: {name: 'CategoryID', type: 'Edm.Int32', key: true, ref: 'categoryID', nullable: false},
    categoryName: {name: 'CategoryName', type: 'Edm.String', nullable: false, maxLength: 15},
    description: {name: 'Description', type: 'Edm.String'},
    picture: {name: 'Picture', type: 'Edm.Binary'},
    products: {name: 'Products', type: 'NorthwindModel.Product', collection: true, navigation: true}
  }
} as EntityConfig<Category>;