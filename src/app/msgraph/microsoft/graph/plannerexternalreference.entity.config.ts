import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerExternalReference } from './plannerexternalreference.entity';
//#endregion

export const PlannerExternalReferenceConfig = {
  name: "PlannerExternalReference",
  annotations: [],
  fields: {
    alias: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    previewPriority: {type: 'Edm.String'},
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<PlannerExternalReference>;