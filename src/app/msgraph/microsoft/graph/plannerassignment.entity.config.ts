import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PlannerAssignment } from './plannerassignment.entity';
//#endregion

export const PlannerAssignmentConfig = {
  name: "PlannerAssignment",
  annotations: [],
  fields: {
    assignedBy: {type: 'graph.identitySet'},
    assignedDateTime: {type: 'Edm.DateTimeOffset'},
    orderHint: {type: 'Edm.String'}
  }
} as EntityConfig<PlannerAssignment>;