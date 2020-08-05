import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerChecklistItems } from './plannerchecklistitems.entity';
//#endregion

export const PlannerChecklistItemsConfig = {
  name: "plannerChecklistItems",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<PlannerChecklistItems>;