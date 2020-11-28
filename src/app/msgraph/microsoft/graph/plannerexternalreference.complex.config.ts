import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerExternalReference } from './plannerexternalreference.complex';
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
} as StructuredTypeConfig<PlannerExternalReference>;