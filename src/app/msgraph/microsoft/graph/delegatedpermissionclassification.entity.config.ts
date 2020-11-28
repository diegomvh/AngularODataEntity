import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DelegatedPermissionClassification } from './delegatedpermissionclassification.entity';
import { DelegatedPermissionClassificationModel } from './delegatedpermissionclassification.model';
import { DelegatedPermissionClassificationCollection } from './delegatedpermissionclassification.collection';
//#endregion

export const DelegatedPermissionClassificationConfig = {
  name: "delegatedPermissionClassification",
  base: "microsoft.graph.entity",
  model: DelegatedPermissionClassificationModel,
  collection: DelegatedPermissionClassificationCollection,
  annotations: [],
  fields: {
    classification: {type: 'graph.permissionClassificationType'},
    permissionId: {type: 'Edm.String'},
    permissionName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DelegatedPermissionClassification>;