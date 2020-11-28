import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Quota } from './quota.entity';
import { QuotaModel } from './quota.model';
import { QuotaCollection } from './quota.collection';
//#endregion

export const QuotaConfig = {
  name: "quota",
  model: QuotaModel,
  collection: QuotaCollection,
  annotations: [],
  fields: {
    deleted: {type: 'Edm.Int64'},
    remaining: {type: 'Edm.Int64'},
    state: {type: 'Edm.String'},
    storagePlanInformation: {type: 'graph.storagePlanInformation'},
    total: {type: 'Edm.Int64'},
    used: {type: 'Edm.Int64'}
  }
} as EntityConfig<Quota>;