import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Shared } from './shared.entity';
//#endregion

export const SharedConfig = {
  name: "shared",
  annotations: [],
  fields: {
    owner: {type: 'graph.identitySet'},
    scope: {type: 'Edm.String'},
    sharedBy: {type: 'graph.identitySet'},
    sharedDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<Shared>;