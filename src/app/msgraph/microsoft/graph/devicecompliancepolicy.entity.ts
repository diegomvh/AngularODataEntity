import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { SettingStateDeviceSummary } from './settingstatedevicesummary.entity';
import { DeviceCompliancePolicyAssignment } from './devicecompliancepolicyassignment.entity';
import { DeviceComplianceScheduledActionForRule } from './devicecompliancescheduledactionforrule.entity';
import { DeviceComplianceDeviceStatus } from './devicecompliancedevicestatus.entity';
import { DeviceComplianceUserStatus } from './devicecomplianceuserstatus.entity';
import { DeviceComplianceDeviceOverview } from './devicecompliancedeviceoverview.entity';
import { DeviceComplianceUserOverview } from './devicecomplianceuseroverview.entity';
//#endregion

export interface DeviceCompliancePolicy extends Entity {
  //#region ODataApi Properties
  createdDateTime: Date;
  description?: string;
  lastModifiedDateTime: Date;
  displayName: string;
  version: number;
  scheduledActionsForRule?: DeviceComplianceScheduledActionForRule[];
  deviceStatuses?: DeviceComplianceDeviceStatus[];
  userStatuses?: DeviceComplianceUserStatus[];
  deviceStatusOverview?: DeviceComplianceDeviceOverview;
  userStatusOverview?: DeviceComplianceUserOverview;
  deviceSettingStateSummaries?: SettingStateDeviceSummary[];
  assignments?: DeviceCompliancePolicyAssignment[];
  //#endregion
}