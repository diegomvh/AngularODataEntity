import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppCategory } from './mobileappcategory.entity';
import { MobileAppCategoryModel } from './mobileappcategory.model';
import { MobileAppCategoryCollection } from './mobileappcategory.collection';
//#endregion

export const MobileAppCategoryConfig = {
  name: "mobileAppCategory",
  base: "microsoft.graph.entity",
  model: MobileAppCategoryModel,
  collection: MobileAppCategoryCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as StructuredTypeConfig<MobileAppCategory>;