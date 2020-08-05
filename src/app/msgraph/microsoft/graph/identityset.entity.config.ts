import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.entity';
//#endregion

export const IdentitySetConfig = {
  name: "identitySet",
  open: true,
  annotations: [],
  fields: {
    application: {type: 'graph.identity'},
    device: {type: 'graph.identity'},
    user: {type: 'graph.identity'}
  }
} as EntityConfig<IdentitySet>;