import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicyAssignment } from './devicecompliancepolicyassignment.entity';
import { DeviceCompliancePolicyAssignmentModel } from './devicecompliancepolicyassignment.model';
import { DeviceCompliancePolicyAssignmentCollection } from './devicecompliancepolicyassignment.collection';
//#endregion

export const DeviceCompliancePolicyAssignmentConfig = {
  name: "deviceCompliancePolicyAssignment",
  base: "microsoft.graph.entity",
  model: DeviceCompliancePolicyAssignmentModel,
  collection: DeviceCompliancePolicyAssignmentCollection,
  annotations: [],
  fields: {
    target: {type: 'graph.deviceAndAppManagementAssignmentTarget'}
  }
} as EntityConfig<DeviceCompliancePolicyAssignment>;