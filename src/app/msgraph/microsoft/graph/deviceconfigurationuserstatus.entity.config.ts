import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfigurationUserStatus } from './deviceconfigurationuserstatus.entity';
//#endregion

export const DeviceConfigurationUserStatusConfig = {
  name: "deviceConfigurationUserStatus",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    userDisplayName: {type: 'Edm.String'},
    devicesCount: {type: 'Edm.Int32', nullable: false},
    status: {type: 'graph.complianceStatus', nullable: false},
    lastReportedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    userPrincipalName: {type: 'Edm.String'}
  }
} as EntityConfig<DeviceConfigurationUserStatus>;