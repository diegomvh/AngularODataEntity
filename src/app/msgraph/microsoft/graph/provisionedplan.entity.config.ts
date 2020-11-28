import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProvisionedPlan } from './provisionedplan.entity';
import { ProvisionedPlanModel } from './provisionedplan.model';
import { ProvisionedPlanCollection } from './provisionedplan.collection';
//#endregion

export const ProvisionedPlanConfig = {
  name: "provisionedPlan",
  model: ProvisionedPlanModel,
  collection: ProvisionedPlanCollection,
  annotations: [],
  fields: {
    capabilityStatus: {type: 'Edm.String'},
    provisioningStatus: {type: 'Edm.String'},
    service: {type: 'Edm.String'}
  }
} as EntityConfig<ProvisionedPlan>;