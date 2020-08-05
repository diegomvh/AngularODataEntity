import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ApiApplication } from './apiapplication.entity';
//#endregion

export const ApiApplicationConfig = {
  name: "ApiApplication",
  annotations: [],
  fields: {
    acceptMappedClaims: {type: 'Edm.Boolean'},
    knownClientApplications: {type: 'Edm.Guid', collection: true},
    preAuthorizedApplications: {type: 'graph.preAuthorizedApplication', collection: true},
    requestedAccessTokenVersion: {type: 'Edm.Int32'},
    oauth2PermissionScopes: {type: 'graph.permissionScope', nullable: false, collection: true}
  }
} as EntityConfig<ApiApplication>;