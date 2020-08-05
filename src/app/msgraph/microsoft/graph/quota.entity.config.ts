import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Quota } from './quota.entity';
//#endregion

export const QuotaConfig = {
  name: "quota",
  annotations: [],
  fields: {
    deleted: {type: 'Edm.Int64'},
    remaining: {type: 'Edm.Int64'},
    state: {type: 'Edm.String'},
    total: {type: 'Edm.Int64'},
    used: {type: 'Edm.Int64'},
    storagePlanInformation: {type: 'graph.storagePlanInformation'}
  }
} as EntityConfig<Quota>;