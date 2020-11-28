import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IdentityProvider } from './identityprovider.entity';
import { IdentityProviderModel } from './identityprovider.model';
import { IdentityProviderCollection } from './identityprovider.collection';
//#endregion

export const IdentityProviderConfig = {
  name: "identityProvider",
  base: "microsoft.graph.entity",
  model: IdentityProviderModel,
  collection: IdentityProviderCollection,
  annotations: [],
  fields: {
    clientId: {type: 'Edm.String'},
    clientSecret: {type: 'Edm.String'},
    name: {type: 'Edm.String'},
    type: {type: 'Edm.String'}
  }
} as EntityConfig<IdentityProvider>;