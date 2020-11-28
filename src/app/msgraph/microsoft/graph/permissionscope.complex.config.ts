import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PermissionScope } from './permissionscope.complex';
import { PermissionScopeModel } from './permissionscope.model';
import { PermissionScopeCollection } from './permissionscope.collection';
//#endregion

export const PermissionScopeConfig = {
  name: "permissionScope",
  model: PermissionScopeModel,
  collection: PermissionScopeCollection,
  annotations: [],
  fields: {
    adminConsentDescription: {type: 'Edm.String'},
    adminConsentDisplayName: {type: 'Edm.String'},
    id: {type: 'Edm.Guid', nullable: false},
    isEnabled: {type: 'Edm.Boolean', nullable: false},
    origin: {type: 'Edm.String'},
    type: {type: 'Edm.String'},
    userConsentDescription: {type: 'Edm.String'},
    userConsentDisplayName: {type: 'Edm.String'},
    value: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PermissionScope>;