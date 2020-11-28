import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ResourceSpecificPermissionGrant } from './resourcespecificpermissiongrant.entity';
import { ResourceSpecificPermissionGrantModel } from './resourcespecificpermissiongrant.model';
import { ResourceSpecificPermissionGrantCollection } from './resourcespecificpermissiongrant.collection';
//#endregion

export const ResourceSpecificPermissionGrantConfig = {
  name: "resourceSpecificPermissionGrant",
  base: "microsoft.graph.directoryObject",
  model: ResourceSpecificPermissionGrantModel,
  collection: ResourceSpecificPermissionGrantCollection,
  annotations: [],
  fields: {
    clientAppId: {type: 'Edm.String'},
    clientId: {type: 'Edm.String'},
    permission: {type: 'Edm.String'},
    permissionType: {type: 'Edm.String'},
    resourceAppId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ResourceSpecificPermissionGrant>;