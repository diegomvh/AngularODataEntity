import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ServicePlanInfo } from './serviceplaninfo.entity';
//#endregion

export const ServicePlanInfoConfig = {
  name: "ServicePlanInfo",
  annotations: [],
  fields: {
    servicePlanId: {type: 'Edm.Guid'},
    servicePlanName: {type: 'Edm.String'},
    provisioningStatus: {type: 'Edm.String'},
    appliesTo: {type: 'Edm.String'}
  }
} as EntityConfig<ServicePlanInfo>;