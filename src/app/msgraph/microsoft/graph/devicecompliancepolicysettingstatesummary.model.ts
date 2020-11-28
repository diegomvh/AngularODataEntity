import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { PolicyPlatformType } from './policyplatformtype.enum';
import { DeviceCompliancePolicySettingStateSummary } from './devicecompliancepolicysettingstatesummary.entity';
import { DeviceComplianceSettingState } from './devicecompliancesettingstate.entity';
import { DeviceComplianceSettingStateModel } from './devicecompliancesettingstate.model';
import { DeviceCompliancePolicySettingStateSummaryCollection } from './devicecompliancepolicysettingstatesummary.collection';
import { DeviceComplianceSettingStateCollection } from './devicecompliancesettingstate.collection';
//#endregion

export class DeviceCompliancePolicySettingStateSummaryModel<E extends DeviceCompliancePolicySettingStateSummary> extends EntityModel<E> {
  //#region ODataApi Properties
  compliantDeviceCount: number;
  conflictDeviceCount: number;
  errorDeviceCount: number;
  nonCompliantDeviceCount: number;
  notApplicableDeviceCount: number;
  platformType: PolicyPlatformType;
  remediatedDeviceCount: number;
  setting?: string;
  settingName?: string;
  unknownDeviceCount: number;
  deviceComplianceSettingStates?: DeviceComplianceSettingStateCollection<DeviceComplianceSettingState, DeviceComplianceSettingStateModel<DeviceComplianceSettingState>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}