import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PermissionGrantPolicy } from './permissiongrantpolicy.entity';
import { PermissionGrantPolicyModel } from './permissiongrantpolicy.model';
import { PermissionGrantPolicyCollection } from './permissiongrantpolicy.collection';
//#endregion

export const PermissionGrantPolicyConfig = {
  name: "permissionGrantPolicy",
  base: "microsoft.graph.policyBase",
  model: PermissionGrantPolicyModel,
  collection: PermissionGrantPolicyCollection,
  annotations: [],
  fields: {
    excludes: {type: 'graph.permissionGrantConditionSet', collection: true, navigation: true},
    includes: {type: 'graph.permissionGrantConditionSet', collection: true, navigation: true}
  }
} as StructuredTypeConfig<PermissionGrantPolicy>;