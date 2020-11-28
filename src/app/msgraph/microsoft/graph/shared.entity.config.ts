import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Shared } from './shared.entity';
import { SharedModel } from './shared.model';
import { SharedCollection } from './shared.collection';
//#endregion

export const SharedConfig = {
  name: "shared",
  model: SharedModel,
  collection: SharedCollection,
  annotations: [],
  fields: {
    owner: {type: 'graph.identitySet'},
    scope: {type: 'Edm.String'},
    sharedBy: {type: 'graph.identitySet'},
    sharedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<Shared>;