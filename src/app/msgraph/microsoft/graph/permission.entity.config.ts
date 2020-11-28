import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { Permission } from './permission.entity';
import { PermissionModel } from './permission.model';
import { PermissionCollection } from './permission.collection';
//#endregion

export const PermissionConfig = {
  name: "permission",
  base: "microsoft.graph.entity",
  model: PermissionModel,
  collection: PermissionCollection,
  annotations: [],
  fields: {
    expirationDateTime: {type: 'Edm.DateTimeOffset'},
    grantedTo: {type: 'graph.identitySet'},
    grantedToIdentities: {type: 'graph.identitySet', collection: true},
    hasPassword: {type: 'Edm.Boolean'},
    inheritedFrom: {type: 'graph.itemReference'},
    invitation: {type: 'graph.sharingInvitation'},
    link: {type: 'graph.sharingLink'},
    roles: {type: 'Edm.String', collection: true},
    shareId: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<Permission>;