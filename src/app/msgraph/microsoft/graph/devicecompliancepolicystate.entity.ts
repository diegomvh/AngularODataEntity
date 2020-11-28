import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ComplianceStatus } from './compliancestatus.enum';
import { PolicyPlatformType } from './policyplatformtype.enum';
import { DeviceCompliancePolicySettingState } from './devicecompliancepolicysettingstate.complex';
import { DeviceCompliancePolicySettingStateModel } from './devicecompliancepolicysettingstate.model';
import { EntityModel } from './entity.model';
import { DeviceCompliancePolicySettingStateCollection } from './devicecompliancepolicysettingstate.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface DeviceCompliancePolicyState extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  platformType: PolicyPlatformType;
  settingCount: number;
  settingStates?: DeviceCompliancePolicySettingState[];
  state: ComplianceStatus;
  version: number;
  //#endregion
}