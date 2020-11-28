import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDeviceMobileAppConfigurationDeviceStatus } from './manageddevicemobileappconfigurationdevicestatus.entity';
import { ManagedDeviceMobileAppConfigurationDeviceStatusModel } from './manageddevicemobileappconfigurationdevicestatus.model';
import { ManagedDeviceMobileAppConfigurationDeviceStatusCollection } from './manageddevicemobileappconfigurationdevicestatus.collection';
//#endregion

export const ManagedDeviceMobileAppConfigurationDeviceStatusConfig = {
  name: "managedDeviceMobileAppConfigurationDeviceStatus",
  base: "microsoft.graph.entity",
  model: ManagedDeviceMobileAppConfigurationDeviceStatusModel,
  collection: ManagedDeviceMobileAppConfigurationDeviceStatusCollection,
  annotations: [],
  fields: {
    complianceGracePeriodExpirationDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    deviceDisplayName: {type: 'Edm.String'},
    deviceModel: {type: 'Edm.String'},
    lastReportedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    status: {type: 'graph.complianceStatus', nullable: false},
    userName: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedDeviceMobileAppConfigurationDeviceStatus>;