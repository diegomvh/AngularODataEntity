import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { OAuth2PermissionGrant } from './oauth2permissiongrant.entity';
import { OAuth2PermissionGrantModel } from './oauth2permissiongrant.model';
import { OAuth2PermissionGrantCollection } from './oauth2permissiongrant.collection';
//#endregion

export const OAuth2PermissionGrantConfig = {
  name: "oAuth2PermissionGrant",
  base: "microsoft.graph.entity",
  model: OAuth2PermissionGrantModel,
  collection: OAuth2PermissionGrantCollection,
  annotations: [],
  fields: {
    clientId: {type: 'Edm.String', nullable: false},
    consentType: {type: 'Edm.String'},
    principalId: {type: 'Edm.String'},
    resourceId: {type: 'Edm.String', nullable: false},
    scope: {type: 'Edm.String'}
  }
} as EntityConfig<OAuth2PermissionGrant>;