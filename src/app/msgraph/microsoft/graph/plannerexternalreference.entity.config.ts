import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerExternalReference } from './plannerexternalreference.entity';
import { PlannerExternalReferenceModel } from './plannerexternalreference.model';
import { PlannerExternalReferenceCollection } from './plannerexternalreference.collection';
//#endregion

export const PlannerExternalReferenceConfig = {
  name: "plannerExternalReference",
  model: PlannerExternalReferenceModel,
  collection: PlannerExternalReferenceCollection,
  annotations: [],
  fields: {
    alias: {type: 'Edm.String'},
    lastModifiedBy: {type: 'graph.identitySet'},
    lastModifiedDateTime: {type: 'Edm.DateTimeOffset'},
    previewPriority: {type: 'Edm.String'},
    type: {type: 'Edm.String'}
  }
} as EntityConfig<PlannerExternalReference>;