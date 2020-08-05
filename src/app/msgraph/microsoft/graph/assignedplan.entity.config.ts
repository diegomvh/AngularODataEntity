import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AssignedPlan } from './assignedplan.entity';
//#endregion

export const AssignedPlanConfig = {
  name: "assignedPlan",
  annotations: [],
  fields: {
    assignedDateTime: {type: 'Edm.DateTimeOffset'},
    capabilityStatus: {type: 'Edm.String'},
    service: {type: 'Edm.String'},
    servicePlanId: {type: 'Edm.Guid'}
  }
} as EntityConfig<AssignedPlan>;