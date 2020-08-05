import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IdentityProvider } from './identityprovider.entity';
//#endregion

export const IdentityProviderConfig = {
  name: "identityProvider",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    type: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    clientId: {type: 'Edm.String'},
    clientSecret: {type: 'Edm.String'}
  }
} as EntityConfig<IdentityProvider>;