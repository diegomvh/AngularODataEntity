import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
import { DeviceComplianceDeviceOverview } from './devicecompliancedeviceoverview.entity';
import { DeviceComplianceDeviceStatus } from './devicecompliancedevicestatus.entity';
import { DeviceCompliancePolicyAssignment } from './devicecompliancepolicyassignment.entity';
import { SettingStateDeviceSummary } from './settingstatedevicesummary.entity';
import { DeviceComplianceScheduledActionForRule } from './devicecompliancescheduledactionforrule.entity';
import { DeviceComplianceUserStatus } from './devicecomplianceuserstatus.entity';
import { DeviceComplianceUserOverview } from './devicecomplianceuseroverview.entity';
import { DeviceCompliancePolicyModel } from './devicecompliancepolicy.model';
import { DeviceComplianceDeviceOverviewModel } from './devicecompliancedeviceoverview.model';
import { DeviceComplianceDeviceStatusModel } from './devicecompliancedevicestatus.model';
import { DeviceCompliancePolicyAssignmentModel } from './devicecompliancepolicyassignment.model';
import { SettingStateDeviceSummaryModel } from './settingstatedevicesummary.model';
import { DeviceComplianceScheduledActionForRuleModel } from './devicecompliancescheduledactionforrule.model';
import { DeviceComplianceUserStatusModel } from './devicecomplianceuserstatus.model';
import { DeviceComplianceUserOverviewModel } from './devicecomplianceuseroverview.model';
import { DeviceComplianceDeviceOverviewCollection } from './devicecompliancedeviceoverview.collection';
import { DeviceComplianceDeviceStatusCollection } from './devicecompliancedevicestatus.collection';
import { DeviceCompliancePolicyAssignmentCollection } from './devicecompliancepolicyassignment.collection';
import { SettingStateDeviceSummaryCollection } from './settingstatedevicesummary.collection';
import { DeviceComplianceScheduledActionForRuleCollection } from './devicecompliancescheduledactionforrule.collection';
import { DeviceComplianceUserStatusCollection } from './devicecomplianceuserstatus.collection';
import { DeviceComplianceUserOverviewCollection } from './devicecomplianceuseroverview.collection';
//#endregion

export class DeviceCompliancePolicyCollection<E extends DeviceCompliancePolicy, M extends DeviceCompliancePolicyModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}