import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppIdentity } from './appidentity.entity';
//#endregion

export const AppIdentityConfig = {
  name: "appIdentity",
  annotations: [],
  fields: {
    appId: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    servicePrincipalId: {type: 'Edm.String'},
    servicePrincipalName: {type: 'Edm.String'}
  }
} as EntityConfig<AppIdentity>;