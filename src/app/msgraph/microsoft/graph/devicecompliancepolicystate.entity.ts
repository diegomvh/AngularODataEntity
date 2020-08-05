import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ComplianceStatus } from './compliancestatus.enum';
import { PolicyPlatformType } from './policyplatformtype.enum';
import { DeviceCompliancePolicySettingState } from './devicecompliancepolicysettingstate.entity';
//#endregion

export interface DeviceCompliancePolicyState extends Entity {
  //#region ODataApi Properties
  settingStates?: DeviceCompliancePolicySettingState[];
  displayName?: string;
  version: number;
  platformType: PolicyPlatformType;
  state: ComplianceStatus;
  settingCount: number;
  //#endregion
}