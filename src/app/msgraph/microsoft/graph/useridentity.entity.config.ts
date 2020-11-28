import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserIdentity } from './useridentity.entity';
import { UserIdentityModel } from './useridentity.model';
import { UserIdentityCollection } from './useridentity.collection';
//#endregion

export const UserIdentityConfig = {
  name: "userIdentity",
  model: UserIdentityModel,
  collection: UserIdentityCollection,
  annotations: [],
  fields: {
    displayName: {type: 'Edm.String'},
    id: {type: 'Edm.String'},
    ipAddress: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'}
  }
} as EntityConfig<UserIdentity>;