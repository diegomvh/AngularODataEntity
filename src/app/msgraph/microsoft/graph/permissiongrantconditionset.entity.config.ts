import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { PermissionGrantConditionSet } from './permissiongrantconditionset.entity';
import { PermissionGrantConditionSetModel } from './permissiongrantconditionset.model';
import { PermissionGrantConditionSetCollection } from './permissiongrantconditionset.collection';
//#endregion

export const PermissionGrantConditionSetConfig = {
  name: "permissionGrantConditionSet",
  base: "microsoft.graph.entity",
  model: PermissionGrantConditionSetModel,
  collection: PermissionGrantConditionSetCollection,
  annotations: [],
  fields: {
    clientApplicationIds: {type: 'Edm.String', collection: true},
    clientApplicationPublisherIds: {type: 'Edm.String', collection: true},
    clientApplicationsFromVerifiedPublisherOnly: {type: 'Edm.Boolean'},
    clientApplicationTenantIds: {type: 'Edm.String', collection: true},
    permissionClassification: {type: 'Edm.String'},
    permissions: {type: 'Edm.String', collection: true},
    permissionType: {type: 'graph.permissionType'},
    resourceApplication: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<PermissionGrantConditionSet>;