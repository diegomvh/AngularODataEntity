import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerAssignments } from './plannerassignments.entity';
//#endregion

export const PlannerAssignmentsConfig = {
  name: "PlannerAssignments",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<PlannerAssignments>;