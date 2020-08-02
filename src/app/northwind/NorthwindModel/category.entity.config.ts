import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Category } from './category.entity';
//#endregion

export const CategoryConfig = {
  name: "Category",
  annotations: [],
  fields: {
    CategoryID: {type: 'Edm.Int32', key: true, ref: 'CategoryID', nullable: false},
    CategoryName: {type: 'Edm.String', nullable: false, maxLength: 15},
    Description: {type: 'Edm.String'},
    Picture: {type: 'Edm.Binary'},
    Products: {type: 'NorthwindModel.Product', collection: true, navigation: true}
  }
} as EntityConfig<Category>;