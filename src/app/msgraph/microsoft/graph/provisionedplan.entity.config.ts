import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ProvisionedPlan } from './provisionedplan.entity';
//#endregion

export const ProvisionedPlanConfig = {
  name: "ProvisionedPlan",
  annotations: [],
  fields: {
    capabilityStatus: {type: 'Edm.String'},
    provisioningStatus: {type: 'Edm.String'},
    service: {type: 'Edm.String'}
  }
} as EntityConfig<ProvisionedPlan>;