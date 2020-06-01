import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Category } from './category.entity';
//#endregion

export const CategoryConfig = {
  name: "Category",
  annotations: [],
  fields: {
    CategoryID: {type: 'number', key: true, ref: 'CategoryID', nullable: false},
    CategoryName: {type: 'string', nullable: false, maxLength: 15},
    Description: {type: 'string'},
    Picture: {type: 'string'},
    Products: {type: 'NorthwindModel.Product', collection: true, navigation: true}
  }
} as EntityConfig<Category>;