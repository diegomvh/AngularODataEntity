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
  keys: [{name: 'Key'}],
  fields: {
    Key: {type: 'Edm.String', nullable: false},
    Title: {type: 'Edm.String'},
    Description: {type: 'Edm.String'},
    CategoryGroupID: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<Category>;
//#endregion