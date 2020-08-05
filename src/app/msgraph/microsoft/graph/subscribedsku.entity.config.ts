import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SubscribedSku } from './subscribedsku.entity';
//#endregion

export const SubscribedSkuConfig = {
  name: "SubscribedSku",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    capabilityStatus: {type: 'Edm.String'},
    consumedUnits: {type: 'Edm.Int32'},
    prepaidUnits: {type: 'graph.licenseUnitsDetail'},
    servicePlans: {type: 'graph.servicePlanInfo', nullable: false, collection: true},
    skuId: {type: 'Edm.Guid'},
    skuPartNumber: {type: 'Edm.String'},
    appliesTo: {type: 'Edm.String'}
  }
} as EntityConfig<SubscribedSku>;