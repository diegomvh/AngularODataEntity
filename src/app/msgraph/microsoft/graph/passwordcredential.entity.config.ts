import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { PasswordCredential } from './passwordcredential.entity';
//#endregion

export const PasswordCredentialConfig = {
  name: "PasswordCredential",
  annotations: [],
  fields: {
    customKeyIdentifier: {type: 'Edm.Binary'},
    displayName: {type: 'Edm.String'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    keyId: {type: 'Edm.Guid'},
    startDateTime: {type: 'Edm.DateTimeOffset'},
    secretText: {type: 'Edm.String'},
    hint: {type: 'Edm.String'}
  }
} as EntityConfig<PasswordCredential>;