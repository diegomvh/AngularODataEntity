import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDeviceMobileAppConfigurationUserStatus } from './manageddevicemobileappconfigurationuserstatus.entity';
//#endregion

export const ManagedDeviceMobileAppConfigurationUserStatusConfig = {
  name: "ManagedDeviceMobileAppConfigurationUserStatus",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    userDisplayName: {type: 'Edm.String'},
    devicesCount: {type: 'Edm.Int32', nullable: false},
    status: {type: 'graph.complianceStatus', nullable: false},
    lastReportedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    userPrincipalName: {type: 'Edm.String'}
  }
} as EntityConfig<ManagedDeviceMobileAppConfigurationUserStatus>;