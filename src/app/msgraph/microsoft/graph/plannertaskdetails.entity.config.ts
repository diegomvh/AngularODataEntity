import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerTaskDetails } from './plannertaskdetails.entity';
import { PlannerTaskDetailsModel } from './plannertaskdetails.model';
import { PlannerTaskDetailsCollection } from './plannertaskdetails.collection';
//#endregion

export const PlannerTaskDetailsConfig = {
  name: "plannerTaskDetails",
  base: "microsoft.graph.entity",
  model: PlannerTaskDetailsModel,
  collection: PlannerTaskDetailsCollection,
  annotations: [],
  fields: {
    checklist: {type: 'graph.plannerChecklistItems'},
    description: {type: 'Edm.String'},
    previewType: {type: 'graph.plannerPreviewType'},
    references: {type: 'graph.plannerExternalReferences'}
  }
} as EntityConfig<PlannerTaskDetails>;