import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PasswordCredential } from './passwordcredential.complex';
import { PasswordCredentialModel } from './passwordcredential.model';
import { PasswordCredentialCollection } from './passwordcredential.collection';
//#endregion

export const PasswordCredentialConfig = {
  name: "passwordCredential",
  model: PasswordCredentialModel,
  collection: PasswordCredentialCollection,
  annotations: [],
  fields: {
    customKeyIdentifier: {type: 'Edm.Binary'},
    displayName: {type: 'Edm.String'},
    endDateTime: {type: 'Edm.DateTimeOffset'},
    hint: {type: 'Edm.String'},
    keyId: {type: 'Edm.Guid'},
    secretText: {type: 'Edm.String'},
    startDateTime: {type: 'Edm.DateTimeOffset'}
  }
} as StructuredTypeConfig<PasswordCredential>;