import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerAssignment } from './plannerassignment.complex';
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
} as StructuredTypeConfig<PlannerAssignment>;