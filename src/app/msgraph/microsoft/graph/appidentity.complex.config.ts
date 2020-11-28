import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AppIdentity } from './appidentity.complex';
import { AppIdentityModel } from './appidentity.model';
import { AppIdentityCollection } from './appidentity.collection';
//#endregion

export const AppIdentityConfig = {
  name: "appIdentity",
  model: AppIdentityModel,
  collection: AppIdentityCollection,
  annotations: [],
  fields: {
    appId: {type: 'Edm.String'},
    displayName: {type: 'Edm.String'},
    servicePrincipalId: {type: 'Edm.String'},
    servicePrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<AppIdentity>;