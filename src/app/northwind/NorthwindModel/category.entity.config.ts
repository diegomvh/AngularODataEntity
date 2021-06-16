//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { Category } from './category.entity';
import { CategoryModel } from './category.model';
import { CategoryCollection } from './category.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const CategoryEntityConfig = {
  name: "Category",
  model: CategoryModel,
  collection: CategoryCollection,
  keys: [{name: 'CategoryID'}],
  fields: {
    CategoryID: {type: 'Edm.Int32', nullable: false},
    CategoryName: {type: 'Edm.String', nullable: false, maxLength: 15},
    Description: {type: 'Edm.String'},
    Picture: {type: 'Edm.Binary'},
    Products: {type: 'NorthwindModel.Product', collection: true, navigation: true}
  }
} as StructuredTypeConfig<Category>;
//#endregion