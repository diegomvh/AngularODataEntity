import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { SettingStateDeviceSummary } from './settingstatedevicesummary.entity';
import { DeviceConfigurationAssignment } from './deviceconfigurationassignment.entity';
import { DeviceConfigurationDeviceStatus } from './deviceconfigurationdevicestatus.entity';
import { DeviceConfigurationDeviceOverview } from './deviceconfigurationdeviceoverview.entity';
import { DeviceConfigurationUserStatus } from './deviceconfigurationuserstatus.entity';
import { DeviceConfigurationUserOverview } from './deviceconfigurationuseroverview.entity';
import { EntityModel } from './entity.model';
import { SettingStateDeviceSummaryModel } from './settingstatedevicesummary.model';
import { DeviceConfigurationAssignmentModel } from './deviceconfigurationassignment.model';
import { DeviceConfigurationDeviceStatusModel } from './deviceconfigurationdevicestatus.model';
import { DeviceConfigurationDeviceOverviewModel } from './deviceconfigurationdeviceoverview.model';
import { DeviceConfigurationUserStatusModel } from './deviceconfigurationuserstatus.model';
import { DeviceConfigurationUserOverviewModel } from './deviceconfigurationuseroverview.model';
import { EntityCollection } from './entity.collection';
import { SettingStateDeviceSummaryCollection } from './settingstatedevicesummary.collection';
import { DeviceConfigurationAssignmentCollection } from './deviceconfigurationassignment.collection';
import { DeviceConfigurationDeviceStatusCollection } from './deviceconfigurationdevicestatus.collection';
import { DeviceConfigurationDeviceOverviewCollection } from './deviceconfigurationdeviceoverview.collection';
import { DeviceConfigurationUserStatusCollection } from './deviceconfigurationuserstatus.collection';
import { DeviceConfigurationUserOverviewCollection } from './deviceconfigurationuseroverview.collection';
//#endregion

export interface DeviceConfiguration extends Entity {
  //#region ODataApi Properties
  createdDateTime: Date;
  description?: string;
  displayName: string;
  lastModifiedDateTime: Date;
  version: number;
  assignments?: DeviceConfigurationAssignment[];
  deviceSettingStateSummaries?: SettingStateDeviceSummary[];
  deviceStatuses?: DeviceConfigurationDeviceStatus[];
  deviceStatusOverview?: DeviceConfigurationDeviceOverview;
  userStatuses?: DeviceConfigurationUserStatus[];
  userStatusOverview?: DeviceConfigurationUserOverview;
  //#endregion
}