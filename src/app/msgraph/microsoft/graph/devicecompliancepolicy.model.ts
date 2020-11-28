import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
import { DeviceComplianceDeviceOverview } from './devicecompliancedeviceoverview.entity';
import { DeviceComplianceDeviceStatus } from './devicecompliancedevicestatus.entity';
import { DeviceCompliancePolicyAssignment } from './devicecompliancepolicyassignment.entity';
import { SettingStateDeviceSummary } from './settingstatedevicesummary.entity';
import { DeviceComplianceScheduledActionForRule } from './devicecompliancescheduledactionforrule.entity';
import { DeviceComplianceUserStatus } from './devicecomplianceuserstatus.entity';
import { DeviceComplianceUserOverview } from './devicecomplianceuseroverview.entity';
import { DeviceComplianceDeviceOverviewModel } from './devicecompliancedeviceoverview.model';
import { DeviceComplianceDeviceStatusModel } from './devicecompliancedevicestatus.model';
import { DeviceCompliancePolicyAssignmentModel } from './devicecompliancepolicyassignment.model';
import { SettingStateDeviceSummaryModel } from './settingstatedevicesummary.model';
import { DeviceComplianceScheduledActionForRuleModel } from './devicecompliancescheduledactionforrule.model';
import { DeviceComplianceUserStatusModel } from './devicecomplianceuserstatus.model';
import { DeviceComplianceUserOverviewModel } from './devicecomplianceuseroverview.model';
import { DeviceCompliancePolicyCollection } from './devicecompliancepolicy.collection';
import { DeviceComplianceDeviceOverviewCollection } from './devicecompliancedeviceoverview.collection';
import { DeviceComplianceDeviceStatusCollection } from './devicecompliancedevicestatus.collection';
import { DeviceCompliancePolicyAssignmentCollection } from './devicecompliancepolicyassignment.collection';
import { SettingStateDeviceSummaryCollection } from './settingstatedevicesummary.collection';
import { DeviceComplianceScheduledActionForRuleCollection } from './devicecompliancescheduledactionforrule.collection';
import { DeviceComplianceUserStatusCollection } from './devicecomplianceuserstatus.collection';
import { DeviceComplianceUserOverviewCollection } from './devicecomplianceuseroverview.collection';
//#endregion

export class DeviceCompliancePolicyModel<E extends DeviceCompliancePolicy> extends EntityModel<E> {
  //#region ODataApi Properties
  createdDateTime: Date;
  description?: string;
  displayName: string;
  lastModifiedDateTime: Date;
  version: number;
  assignments?: DeviceCompliancePolicyAssignmentCollection<DeviceCompliancePolicyAssignment, DeviceCompliancePolicyAssignmentModel<DeviceCompliancePolicyAssignment>>;
  deviceSettingStateSummaries?: SettingStateDeviceSummaryCollection<SettingStateDeviceSummary, SettingStateDeviceSummaryModel<SettingStateDeviceSummary>>;
  deviceStatuses?: DeviceComplianceDeviceStatusCollection<DeviceComplianceDeviceStatus, DeviceComplianceDeviceStatusModel<DeviceComplianceDeviceStatus>>;
  deviceStatusOverview?: DeviceComplianceDeviceOverviewModel<DeviceComplianceDeviceOverview>;
  scheduledActionsForRule?: DeviceComplianceScheduledActionForRuleCollection<DeviceComplianceScheduledActionForRule, DeviceComplianceScheduledActionForRuleModel<DeviceComplianceScheduledActionForRule>>;
  userStatuses?: DeviceComplianceUserStatusCollection<DeviceComplianceUserStatus, DeviceComplianceUserStatusModel<DeviceComplianceUserStatus>>;
  userStatusOverview?: DeviceComplianceUserOverviewModel<DeviceComplianceUserOverview>;
  //#endregion
  //#region ODataApi Actions
  public assign(assignments: DeviceCompliancePolicyAssignment[], options?: HttpOptions): Observable<DeviceCompliancePolicyAssignmentCollection<DeviceCompliancePolicyAssignment, DeviceCompliancePolicyAssignmentModel<DeviceCompliancePolicyAssignment>>> {
    var res = this._action<{assignments: DeviceCompliancePolicyAssignment[]}, DeviceCompliancePolicyAssignment>('microsoft.graph.assign');
    res.segment.entitySet('');
    return res.call({assignments}, 'collection', options) as Observable<DeviceCompliancePolicyAssignmentCollection<DeviceCompliancePolicyAssignment, DeviceCompliancePolicyAssignmentModel<DeviceCompliancePolicyAssignment>>>;
  }
  public scheduleActionsForRules(deviceComplianceScheduledActionForRules: DeviceComplianceScheduledActionForRule[], options?: HttpOptions): Observable<any> {
    var res = this._action<{deviceComplianceScheduledActionForRules: DeviceComplianceScheduledActionForRule[]}, any>('microsoft.graph.scheduleActionsForRules');
    res.segment.entitySet('');
    return res.call({deviceComplianceScheduledActionForRules}, 'property', options) as Observable<any>;
  }
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}