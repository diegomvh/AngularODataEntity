import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppCategory } from './mobileappcategory.entity';
//#endregion

export const MobileAppCategoryConfig = {
  name: "MobileAppCategory",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as EntityConfig<MobileAppCategory>;