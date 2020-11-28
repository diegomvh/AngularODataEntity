import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { ManagedDeviceMobileAppConfigurationUserStatus } from './manageddevicemobileappconfigurationuserstatus.entity';
import { ManagedDeviceMobileAppConfigurationUserStatusModel } from './manageddevicemobileappconfigurationuserstatus.model';
import { ManagedDeviceMobileAppConfigurationUserStatusCollection } from './manageddevicemobileappconfigurationuserstatus.collection';
//#endregion

export const ManagedDeviceMobileAppConfigurationUserStatusConfig = {
  name: "managedDeviceMobileAppConfigurationUserStatus",
  base: "microsoft.graph.entity",
  model: ManagedDeviceMobileAppConfigurationUserStatusModel,
  collection: ManagedDeviceMobileAppConfigurationUserStatusCollection,
  annotations: [],
  fields: {
    devicesCount: {type: 'Edm.Int32', nullable: false},
    lastReportedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    status: {type: 'graph.complianceStatus', nullable: false},
    userDisplayName: {type: 'Edm.String'},
    userPrincipalName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<ManagedDeviceMobileAppConfigurationUserStatus>;