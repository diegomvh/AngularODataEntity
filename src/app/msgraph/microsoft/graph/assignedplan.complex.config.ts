import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AssignedPlan } from './assignedplan.complex';
import { AssignedPlanModel } from './assignedplan.model';
import { AssignedPlanCollection } from './assignedplan.collection';
//#endregion

export const AssignedPlanConfig = {
  name: "assignedPlan",
  model: AssignedPlanModel,
  collection: AssignedPlanCollection,
  annotations: [],
  fields: {
    assignedDateTime: {type: 'Edm.DateTimeOffset'},
    capabilityStatus: {type: 'Edm.String'},
    service: {type: 'Edm.String'},
    servicePlanId: {type: 'Edm.Guid'}
  }
} as StructuredTypeConfig<AssignedPlan>;