import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ManagedDeviceMobileAppConfigurationAssignment } from './manageddevicemobileappconfigurationassignment.entity';
import { ManagedDeviceMobileAppConfigurationDeviceStatus } from './manageddevicemobileappconfigurationdevicestatus.entity';
import { ManagedDeviceMobileAppConfigurationUserStatus } from './manageddevicemobileappconfigurationuserstatus.entity';
import { ManagedDeviceMobileAppConfigurationDeviceSummary } from './manageddevicemobileappconfigurationdevicesummary.entity';
import { ManagedDeviceMobileAppConfigurationUserSummary } from './manageddevicemobileappconfigurationusersummary.entity';
//#endregion

export interface ManagedDeviceMobileAppConfiguration extends Entity {
  //#region ODataApi Properties
  targetedMobileApps?: string[];
  createdDateTime: Date;
  description?: string;
  lastModifiedDateTime: Date;
  displayName: string;
  version: number;
  assignments?: ManagedDeviceMobileAppConfigurationAssignment[];
  deviceStatuses?: ManagedDeviceMobileAppConfigurationDeviceStatus[];
  userStatuses?: ManagedDeviceMobileAppConfigurationUserStatus[];
  deviceStatusSummary?: ManagedDeviceMobileAppConfigurationDeviceSummary;
  userStatusSummary?: ManagedDeviceMobileAppConfigurationUserSummary;
  //#endregion
}