import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerExternalReferences } from './plannerexternalreferences.entity';
import { PlannerExternalReferencesModel } from './plannerexternalreferences.model';
import { PlannerExternalReferencesCollection } from './plannerexternalreferences.collection';
//#endregion

export const PlannerExternalReferencesConfig = {
  name: "plannerExternalReferences",
  open: true,
  model: PlannerExternalReferencesModel,
  collection: PlannerExternalReferencesCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<PlannerExternalReferences>;