import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerTaskDetails } from './plannertaskdetails.entity';
//#endregion

export const PlannerTaskDetailsConfig = {
  name: "PlannerTaskDetails",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    description: {type: 'Edm.String'},
    previewType: {type: 'graph.plannerPreviewType'},
    references: {type: 'graph.plannerExternalReferences'},
    checklist: {type: 'graph.plannerChecklistItems'}
  }
} as EntityConfig<PlannerTaskDetails>;