import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerOrderHintsByAssignee } from './plannerorderhintsbyassignee.complex';
import { PlannerOrderHintsByAssigneeModel } from './plannerorderhintsbyassignee.model';
import { PlannerOrderHintsByAssigneeCollection } from './plannerorderhintsbyassignee.collection';
//#endregion

export const PlannerOrderHintsByAssigneeConfig = {
  name: "plannerOrderHintsByAssignee",
  open: true,
  model: PlannerOrderHintsByAssigneeModel,
  collection: PlannerOrderHintsByAssigneeCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<PlannerOrderHintsByAssignee>;