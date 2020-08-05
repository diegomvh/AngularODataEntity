import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OAuth2PermissionGrant } from './oauth2permissiongrant.entity';
//#endregion

export const OAuth2PermissionGrantConfig = {
  name: "oAuth2PermissionGrant",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    clientId: {type: 'Edm.String', nullable: false},
    consentType: {type: 'Edm.String'},
    principalId: {type: 'Edm.String'},
    resourceId: {type: 'Edm.String', nullable: false},
    scope: {type: 'Edm.String'}
  }
} as EntityConfig<OAuth2PermissionGrant>;