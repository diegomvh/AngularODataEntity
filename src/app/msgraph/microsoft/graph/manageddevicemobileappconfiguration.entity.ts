import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ManagedDeviceMobileAppConfigurationAssignment } from './manageddevicemobileappconfigurationassignment.entity';
import { ManagedDeviceMobileAppConfigurationDeviceStatus } from './manageddevicemobileappconfigurationdevicestatus.entity';
import { ManagedDeviceMobileAppConfigurationDeviceSummary } from './manageddevicemobileappconfigurationdevicesummary.entity';
import { ManagedDeviceMobileAppConfigurationUserStatus } from './manageddevicemobileappconfigurationuserstatus.entity';
import { ManagedDeviceMobileAppConfigurationUserSummary } from './manageddevicemobileappconfigurationusersummary.entity';
import { EntityModel } from './entity.model';
import { ManagedDeviceMobileAppConfigurationAssignmentModel } from './manageddevicemobileappconfigurationassignment.model';
import { ManagedDeviceMobileAppConfigurationDeviceStatusModel } from './manageddevicemobileappconfigurationdevicestatus.model';
import { ManagedDeviceMobileAppConfigurationDeviceSummaryModel } from './manageddevicemobileappconfigurationdevicesummary.model';
import { ManagedDeviceMobileAppConfigurationUserStatusModel } from './manageddevicemobileappconfigurationuserstatus.model';
import { ManagedDeviceMobileAppConfigurationUserSummaryModel } from './manageddevicemobileappconfigurationusersummary.model';
import { EntityCollection } from './entity.collection';
import { ManagedDeviceMobileAppConfigurationAssignmentCollection } from './manageddevicemobileappconfigurationassignment.collection';
import { ManagedDeviceMobileAppConfigurationDeviceStatusCollection } from './manageddevicemobileappconfigurationdevicestatus.collection';
import { ManagedDeviceMobileAppConfigurationDeviceSummaryCollection } from './manageddevicemobileappconfigurationdevicesummary.collection';
import { ManagedDeviceMobileAppConfigurationUserStatusCollection } from './manageddevicemobileappconfigurationuserstatus.collection';
import { ManagedDeviceMobileAppConfigurationUserSummaryCollection } from './manageddevicemobileappconfigurationusersummary.collection';
//#endregion

export interface ManagedDeviceMobileAppConfiguration extends Entity {
  //#region ODataApi Properties
  createdDateTime: Date;
  description?: string;
  displayName: string;
  lastModifiedDateTime: Date;
  targetedMobileApps?: string[];
  version: number;
  assignments?: ManagedDeviceMobileAppConfigurationAssignment[];
  deviceStatuses?: ManagedDeviceMobileAppConfigurationDeviceStatus[];
  deviceStatusSummary?: ManagedDeviceMobileAppConfigurationDeviceSummary;
  userStatuses?: ManagedDeviceMobileAppConfigurationUserStatus[];
  userStatusSummary?: ManagedDeviceMobileAppConfigurationUserSummary;
  //#endregion
}