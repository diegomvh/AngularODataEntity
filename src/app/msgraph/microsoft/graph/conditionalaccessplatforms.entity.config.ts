import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessPlatforms } from './conditionalaccessplatforms.entity';
//#endregion

export const ConditionalAccessPlatformsConfig = {
  name: "ConditionalAccessPlatforms",
  annotations: [],
  fields: {
    includePlatforms: {type: 'graph.conditionalAccessDevicePlatform', nullable: false, collection: true},
    excludePlatforms: {type: 'graph.conditionalAccessDevicePlatform', nullable: false, collection: true}
  }
} as EntityConfig<ConditionalAccessPlatforms>;