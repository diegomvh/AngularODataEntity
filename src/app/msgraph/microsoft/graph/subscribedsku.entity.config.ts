import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { SubscribedSku } from './subscribedsku.entity';
import { SubscribedSkuModel } from './subscribedsku.model';
import { SubscribedSkuCollection } from './subscribedsku.collection';
//#endregion

export const SubscribedSkuConfig = {
  name: "subscribedSku",
  base: "microsoft.graph.entity",
  model: SubscribedSkuModel,
  collection: SubscribedSkuCollection,
  annotations: [],
  fields: {
    appliesTo: {type: 'Edm.String'},
    capabilityStatus: {type: 'Edm.String'},
    consumedUnits: {type: 'Edm.Int32'},
    prepaidUnits: {type: 'graph.licenseUnitsDetail'},
    servicePlans: {type: 'graph.servicePlanInfo', nullable: false, collection: true},
    skuId: {type: 'Edm.Guid'},
    skuPartNumber: {type: 'Edm.String'}
  }
} as EntityConfig<SubscribedSku>;