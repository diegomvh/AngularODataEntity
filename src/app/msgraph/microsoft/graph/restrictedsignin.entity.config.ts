import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { RestrictedSignIn } from './restrictedsignin.entity';
//#endregion

export const RestrictedSignInConfig = {
  name: "RestrictedSignIn",
  base: "microsoft.graph.signIn",
  annotations: [],
  fields: {
    targetTenantId: {type: 'Edm.Guid'}
  }
} as EntityConfig<RestrictedSignIn>;