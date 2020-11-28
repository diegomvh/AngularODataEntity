import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { KeyCredential } from './keycredential.complex';
import { KeyCredentialModel } from './keycredential.model';
import { KeyCredentialCollection } from './keycredential.collection';
//#endregion

export const KeyCredentialConfig = {
  name: "keyCredential",
  model: KeyCredentialModel,
  collection: KeyCredentialCollection,
  annotations: [],
  fields: {
    customKeyIdentifier: {type: 'Edm.Binary'},
    displayName: {type: 'Edm.String'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    key: {type: 'Edm.Binary'},
    keyId: {type: 'Edm.Guid'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    type: {type: 'Edm.String'},
    usage: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<KeyCredential>;