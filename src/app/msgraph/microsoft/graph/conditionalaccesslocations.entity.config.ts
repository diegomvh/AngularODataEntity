import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessLocations } from './conditionalaccesslocations.entity';
//#endregion

export const ConditionalAccessLocationsConfig = {
  name: "conditionalAccessLocations",
  annotations: [],
  fields: {
    includeLocations: {type: 'Edm.String', nullable: false, collection: true},
    excludeLocations: {type: 'Edm.String', nullable: false, collection: true}
  }
} as EntityConfig<ConditionalAccessLocations>;