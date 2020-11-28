import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceComplianceUserStatus } from './devicecomplianceuserstatus.entity';
import { DeviceComplianceUserStatusModel } from './devicecomplianceuserstatus.model';
import { DeviceComplianceUserStatusCollection } from './devicecomplianceuserstatus.collection';
//#endregion

export const DeviceComplianceUserStatusConfig = {
  name: "deviceComplianceUserStatus",
  base: "microsoft.graph.entity",
  model: DeviceComplianceUserStatusModel,
  collection: DeviceComplianceUserStatusCollection,
  annotations: [],
  fields: {
    devicesCount: {type: 'Edm.Int32', nullable: false},
    lastReportedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    status: {type: 'graph.complianceStatus', nullable: false},
    userDisplayName: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'}
  }
} as EntityConfig<DeviceComplianceUserStatus>;