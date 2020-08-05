import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppContent } from './mobileappcontent.entity';
//#endregion

export const MobileAppContentConfig = {
  name: "mobileAppContent",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    files: {type: 'graph.mobileAppContentFile', collection: true, navigation: true}
  }
} as EntityConfig<MobileAppContent>;