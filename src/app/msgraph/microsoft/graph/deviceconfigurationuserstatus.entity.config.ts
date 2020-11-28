import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfigurationUserStatus } from './deviceconfigurationuserstatus.entity';
import { DeviceConfigurationUserStatusModel } from './deviceconfigurationuserstatus.model';
import { DeviceConfigurationUserStatusCollection } from './deviceconfigurationuserstatus.collection';
//#endregion

export const DeviceConfigurationUserStatusConfig = {
  name: "deviceConfigurationUserStatus",
  base: "microsoft.graph.entity",
  model: DeviceConfigurationUserStatusModel,
  collection: DeviceConfigurationUserStatusCollection,
  annotations: [],
  fields: {
    devicesCount: {type: 'Edm.Int32', nullable: false},
    lastReportedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    status: {type: 'graph.complianceStatus', nullable: false},
    userDisplayName: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeviceConfigurationUserStatus>;