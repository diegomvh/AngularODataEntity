import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { MobileAppContent } from './mobileappcontent.entity';
import { MobileAppContentModel } from './mobileappcontent.model';
import { MobileAppContentCollection } from './mobileappcontent.collection';
//#endregion

export const MobileAppContentConfig = {
  name: "mobileAppContent",
  base: "microsoft.graph.entity",
  model: MobileAppContentModel,
  collection: MobileAppContentCollection,
  annotations: [],
  fields: {
    files: {type: 'graph.mobileAppContentFile', collection: true, navigation: true}
  }
} as EntityConfig<MobileAppContent>;