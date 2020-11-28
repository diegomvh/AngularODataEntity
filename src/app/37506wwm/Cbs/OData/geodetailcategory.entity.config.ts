import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { GeoDetailCategory } from './geodetailcategory.entity';
import { GeoDetailCategoryModel } from './geodetailcategory.model';
import { GeoDetailCategoryCollection } from './geodetailcategory.collection';
//#endregion

export const GeoDetailCategoryConfig = {
  name: "GeoDetailCategory",
  model: GeoDetailCategoryModel,
  collection: GeoDetailCategoryCollection,
  annotations: [],
  fields: {
    Key: {type: 'Edm.String', key: true, ref: 'Key', nullable: false},
    Title: {type: 'Edm.String'},
    Description: {type: 'Edm.String'},
    Municipality: {type: 'Edm.String'},
    DetailRegionCode: {type: 'Edm.String'}
  }
} as EntityConfig<GeoDetailCategory>;