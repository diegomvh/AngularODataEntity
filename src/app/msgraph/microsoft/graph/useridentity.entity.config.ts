import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserIdentity } from './useridentity.entity';
//#endregion

export const UserIdentityConfig = {
  name: "userIdentity",
  annotations: [],
  fields: {
    id: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    ipAddress: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'}
  }
} as EntityConfig<UserIdentity>;