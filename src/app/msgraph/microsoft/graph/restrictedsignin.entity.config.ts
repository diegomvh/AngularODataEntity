import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RestrictedSignIn } from './restrictedsignin.entity';
import { RestrictedSignInModel } from './restrictedsignin.model';
import { RestrictedSignInCollection } from './restrictedsignin.collection';
//#endregion

export const RestrictedSignInConfig = {
  name: "restrictedSignIn",
  base: "microsoft.graph.signIn",
  model: RestrictedSignInModel,
  collection: RestrictedSignInCollection,
  annotations: [],
  fields: {
    targetTenantId: {type: 'Edm.Guid'}
  }
} as EntityConfig<RestrictedSignIn>;