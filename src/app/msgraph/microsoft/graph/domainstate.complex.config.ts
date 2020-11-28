import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DomainState } from './domainstate.complex';
import { DomainStateModel } from './domainstate.model';
import { DomainStateCollection } from './domainstate.collection';
//#endregion

export const DomainStateConfig = {
  name: "domainState",
  model: DomainStateModel,
  collection: DomainStateCollection,
  annotations: [],
  fields: {
    lastActionDateTime: {type: 'Edm.DateTimeOffset'},
    operation: {type: 'Edm.String'},
    status: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DomainState>;