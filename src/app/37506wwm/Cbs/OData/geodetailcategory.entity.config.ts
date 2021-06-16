//#region AngularOData Imports
import { 
  StructuredTypeConfig 
} from 'angular-odata';//#endregion

//#region ODataApi Imports
import { GeoDetailCategory } from './geodetailcategory.entity';
import { GeoDetailCategoryModel } from './geodetailcategory.model';
import { GeoDetailCategoryCollection } from './geodetailcategory.collection';
//#endregion

//#region ODataApi StrucutredTypeConfig
export const GeoDetailCategoryEntityConfig = {
  name: "GeoDetailCategory",
  model: GeoDetailCategoryModel,
  collection: GeoDetailCategoryCollection,
  keys: [{name: 'Key'}],
  fields: {
    Key: {type: 'Edm.String', nullable: false},
    Title: {type: 'Edm.String'},
    Description: {type: 'Edm.String'},
    Municipality: {type: 'Edm.String'},
    DetailRegionCode: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<GeoDetailCategory>;
//#endregion