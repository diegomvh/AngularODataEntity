import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Category } from './category.entity';
//#endregion

export const CategoryConfig = {
  name: "Category",
  annotations: [],
  fields: {
    CategoryID: {type: 'Number', key: true, ref: 'CategoryID', nullable: false},
    CategoryName: {type: 'String', nullable: false, maxLength: 15},
    Description: {type: 'String'},
    Picture: {type: 'String'},
    Products: {type: 'NorthwindModel.Product', collection: true, navigation: true}
  }
} as EntityConfig<Category>;