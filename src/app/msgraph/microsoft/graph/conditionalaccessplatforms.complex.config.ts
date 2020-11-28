import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessPlatforms } from './conditionalaccessplatforms.complex';
import { ConditionalAccessPlatformsModel } from './conditionalaccessplatforms.model';
import { ConditionalAccessPlatformsCollection } from './conditionalaccessplatforms.collection';
//#endregion

export const ConditionalAccessPlatformsConfig = {
  name: "conditionalAccessPlatforms",
  model: ConditionalAccessPlatformsModel,
  collection: ConditionalAccessPlatformsCollection,
  annotations: [],
  fields: {
    excludePlatforms: {type: 'graph.conditionalAccessDevicePlatform', nullable: false, collection: true},
    includePlatforms: {type: 'graph.conditionalAccessDevicePlatform', nullable: false, collection: true}
  }
} as StructuredTypeConfig<ConditionalAccessPlatforms>;