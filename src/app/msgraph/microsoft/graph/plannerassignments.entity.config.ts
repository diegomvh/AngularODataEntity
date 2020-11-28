import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerAssignments } from './plannerassignments.entity';
import { PlannerAssignmentsModel } from './plannerassignments.model';
import { PlannerAssignmentsCollection } from './plannerassignments.collection';
//#endregion

export const PlannerAssignmentsConfig = {
  name: "plannerAssignments",
  open: true,
  model: PlannerAssignmentsModel,
  collection: PlannerAssignmentsCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<PlannerAssignments>;