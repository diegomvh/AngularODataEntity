import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DomainState } from './domainstate.entity';
//#endregion

export const DomainStateConfig = {
  name: "DomainState",
  annotations: [],
  fields: {
    status: {type: 'Edm.String'},
    operation: {type: 'Edm.String'},
    lastActionDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as EntityConfig<DomainState>;