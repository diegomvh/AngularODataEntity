import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { DeviceComplianceDeviceOverview } from './devicecompliancedeviceoverview.entity';
import { DeviceComplianceDeviceStatus } from './devicecompliancedevicestatus.entity';
import { DeviceCompliancePolicyAssignment } from './devicecompliancepolicyassignment.entity';
import { SettingStateDeviceSummary } from './settingstatedevicesummary.entity';
import { DeviceComplianceScheduledActionForRule } from './devicecompliancescheduledactionforrule.entity';
import { DeviceComplianceUserStatus } from './devicecomplianceuserstatus.entity';
import { DeviceComplianceUserOverview } from './devicecomplianceuseroverview.entity';
import { EntityModel } from './entity.model';
import { DeviceComplianceDeviceOverviewModel } from './devicecompliancedeviceoverview.model';
import { DeviceComplianceDeviceStatusModel } from './devicecompliancedevicestatus.model';
import { DeviceCompliancePolicyAssignmentModel } from './devicecompliancepolicyassignment.model';
import { SettingStateDeviceSummaryModel } from './settingstatedevicesummary.model';
import { DeviceComplianceScheduledActionForRuleModel } from './devicecompliancescheduledactionforrule.model';
import { DeviceComplianceUserStatusModel } from './devicecomplianceuserstatus.model';
import { DeviceComplianceUserOverviewModel } from './devicecomplianceuseroverview.model';
import { EntityCollection } from './entity.collection';
import { DeviceComplianceDeviceOverviewCollection } from './devicecompliancedeviceoverview.collection';
import { DeviceComplianceDeviceStatusCollection } from './devicecompliancedevicestatus.collection';
import { DeviceCompliancePolicyAssignmentCollection } from './devicecompliancepolicyassignment.collection';
import { SettingStateDeviceSummaryCollection } from './settingstatedevicesummary.collection';
import { DeviceComplianceScheduledActionForRuleCollection } from './devicecompliancescheduledactionforrule.collection';
import { DeviceComplianceUserStatusCollection } from './devicecomplianceuserstatus.collection';
import { DeviceComplianceUserOverviewCollection } from './devicecomplianceuseroverview.collection';
//#endregion

export interface DeviceCompliancePolicy extends Entity {
  //#region ODataApi Properties
  createdDateTime: Date;
  description?: string;
  displayName: string;
  lastModifiedDateTime: Date;
  version: number;
  assignments?: DeviceCompliancePolicyAssignment[];
  deviceSettingStateSummaries?: SettingStateDeviceSummary[];
  deviceStatuses?: DeviceComplianceDeviceStatus[];
  deviceStatusOverview?: DeviceComplianceDeviceOverview;
  scheduledActionsForRule?: DeviceComplianceScheduledActionForRule[];
  userStatuses?: DeviceComplianceUserStatus[];
  userStatusOverview?: DeviceComplianceUserOverview;
  //#endregion
}