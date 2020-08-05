import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Permission } from './permission.entity';
//#endregion

export const PermissionConfig = {
  name: "Permission",
  base: "microsoft.graph.entity",
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
} as EntityConfig<Permission>;