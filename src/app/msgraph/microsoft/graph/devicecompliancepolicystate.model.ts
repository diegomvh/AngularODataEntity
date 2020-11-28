import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { ComplianceStatus } from './compliancestatus.enum';
import { PolicyPlatformType } from './policyplatformtype.enum';
import { DeviceCompliancePolicySettingState } from './devicecompliancepolicysettingstate.complex';
import { DeviceCompliancePolicyState } from './devicecompliancepolicystate.entity';
import { DeviceCompliancePolicySettingStateModel } from './devicecompliancepolicysettingstate.model';
import { DeviceCompliancePolicySettingStateCollection } from './devicecompliancepolicysettingstate.collection';
import { DeviceCompliancePolicyStateCollection } from './devicecompliancepolicystate.collection';
//#endregion

export class DeviceCompliancePolicyStateModel<E extends DeviceCompliancePolicyState> extends EntityModel<E> {
  //#region ODataApi Properties
  displayName?: string;
  platformType: PolicyPlatformType;
  settingCount: number;
  settingStates?: DeviceCompliancePolicySettingStateCollection<DeviceCompliancePolicySettingState, DeviceCompliancePolicySettingStateModel<DeviceCompliancePolicySettingState>>;
  state: ComplianceStatus;
  version: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}