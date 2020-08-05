import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResponseStatus } from './responsestatus.entity';
//#endregion

export const ResponseStatusConfig = {
  name: "responseStatus",
  annotations: [],
  fields: {
    response: {type: 'graph.responseType'},
    time: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<ResponseStatus>;