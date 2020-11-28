import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerChecklistItems } from './plannerchecklistitems.entity';
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
} as EntityConfig<PlannerChecklistItems>;