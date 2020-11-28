import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ConditionalAccessLocations } from './conditionalaccesslocations.complex';
import { ConditionalAccessLocationsModel } from './conditionalaccesslocations.model';
import { ConditionalAccessLocationsCollection } from './conditionalaccesslocations.collection';
//#endregion

export const ConditionalAccessLocationsConfig = {
  name: "conditionalAccessLocations",
  model: ConditionalAccessLocationsModel,
  collection: ConditionalAccessLocationsCollection,
  annotations: [],
  fields: {
    excludeLocations: {type: 'Edm.String', nullable: false, collection: true},
    includeLocations: {type: 'Edm.String', nullable: false, collection: true}
  }
} as StructuredTypeConfig<ConditionalAccessLocations>;