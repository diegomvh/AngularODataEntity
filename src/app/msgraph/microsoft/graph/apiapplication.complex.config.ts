import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ApiApplication } from './apiapplication.complex';
import { ApiApplicationModel } from './apiapplication.model';
import { ApiApplicationCollection } from './apiapplication.collection';
//#endregion

export const ApiApplicationConfig = {
  name: "apiApplication",
  model: ApiApplicationModel,
  collection: ApiApplicationCollection,
  annotations: [],
  fields: {
    acceptMappedClaims: {type: 'Edm.Boolean'},
    knownClientApplications: {type: 'Edm.Guid', collection: true},
    oauth2PermissionScopes: {type: 'graph.permissionScope', nullable: false, collection: true},
    preAuthorizedApplications: {type: 'graph.preAuthorizedApplication', collection: true},
    requestedAccessTokenVersion: {type: 'Edm.Int32'}
  }
} as StructuredTypeConfig<ApiApplication>;