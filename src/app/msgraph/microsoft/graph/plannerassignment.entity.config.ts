import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerAssignment } from './plannerassignment.entity';
import { PlannerAssignmentModel } from './plannerassignment.model';
import { PlannerAssignmentCollection } from './plannerassignment.collection';
//#endregion

export const PlannerAssignmentConfig = {
  name: "plannerAssignment",
  model: PlannerAssignmentModel,
  collection: PlannerAssignmentCollection,
  annotations: [],
  fields: {
    assignedBy: {type: 'graph.identitySet'},
    assignedDateTime: {type: 'Edm.DateTimeOffset'},
    orderHint: {type: 'Edm.String'}
  }
} as EntityConfig<PlannerAssignment>;