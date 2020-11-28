import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IdentitySet } from './identityset.complex';
import { IdentitySetModel } from './identityset.model';
import { IdentitySetCollection } from './identityset.collection';
//#endregion

export const IdentitySetConfig = {
  name: "identitySet",
  open: true,
  model: IdentitySetModel,
  collection: IdentitySetCollection,
  annotations: [],
  fields: {
    application: {type: 'graph.identity'},
    device: {type: 'graph.identity'},
    user: {type: 'graph.identity'}
  }
} as StructuredTypeConfig<IdentitySet>;