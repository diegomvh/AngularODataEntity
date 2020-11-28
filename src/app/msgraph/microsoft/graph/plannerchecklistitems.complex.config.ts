import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerChecklistItems } from './plannerchecklistitems.complex';
import { PlannerChecklistItemsModel } from './plannerchecklistitems.model';
import { PlannerChecklistItemsCollection } from './plannerchecklistitems.collection';
//#endregion

export const PlannerChecklistItemsConfig = {
  name: "plannerChecklistItems",
  open: true,
  model: PlannerChecklistItemsModel,
  collection: PlannerChecklistItemsCollection,
  annotations: [],
  fields: {
    
  }
} as StructuredTypeConfig<PlannerChecklistItems>;