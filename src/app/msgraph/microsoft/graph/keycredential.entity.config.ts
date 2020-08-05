import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { KeyCredential } from './keycredential.entity';
//#endregion

export const KeyCredentialConfig = {
  name: "keyCredential",
  annotations: [],
  fields: {
    customKeyIdentifier: {type: 'Edm.Binary'},
    displayName: {type: 'Edm.String'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    keyId: {type: 'Edm.Guid'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    type: {type: 'Edm.String'},
    usage: {type: 'Edm.String'},
    key: {type: 'Edm.Binary'}
  }
} as EntityConfig<KeyCredential>;