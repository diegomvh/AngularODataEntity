import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerChecklistItems } from './plannerchecklistitems.entity';
//#endregion

export const PlannerChecklistItemsConfig = {
  name: "PlannerChecklistItems",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<PlannerChecklistItems>;