import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ComplianceStatus } from './compliancestatus.enum';
import { PolicyPlatformType } from './policyplatformtype.enum';
import { DeviceConfigurationSettingState } from './deviceconfigurationsettingstate.entity';
//#endregion

export interface DeviceConfigurationState extends Entity {
  //#region ODataApi Properties
  settingStates?: DeviceConfigurationSettingState[];
  displayName?: string;
  version: number;
  platformType: PolicyPlatformType;
  state: ComplianceStatus;
  settingCount: number;
  //#endregion
}