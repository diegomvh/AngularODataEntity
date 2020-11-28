import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ServicePlanInfo } from './serviceplaninfo.entity';
import { ServicePlanInfoModel } from './serviceplaninfo.model';
import { ServicePlanInfoCollection } from './serviceplaninfo.collection';
//#endregion

export const ServicePlanInfoConfig = {
  name: "servicePlanInfo",
  model: ServicePlanInfoModel,
  collection: ServicePlanInfoCollection,
  annotations: [],
  fields: {
    appliesTo: {type: 'Edm.String'},
    provisioningStatus: {type: 'Edm.String'},
    servicePlanId: {type: 'Edm.Guid'},
    servicePlanName: {type: 'Edm.String'}
  }
} as EntityConfig<ServicePlanInfo>;