import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { ComplianceStatus } from './compliancestatus.enum';
import { PolicyPlatformType } from './policyplatformtype.enum';
import { DeviceConfigurationSettingState } from './deviceconfigurationsettingstate.entity';
import { DeviceConfigurationSettingStateModel } from './deviceconfigurationsettingstate.model';
import { EntityModel } from './entity.model';
import { DeviceConfigurationSettingStateCollection } from './deviceconfigurationsettingstate.collection';
import { EntityCollection } from './entity.collection';
//#endregion

export interface DeviceConfigurationState extends Entity {
  //#region ODataApi Properties
  displayName?: string;
  platformType: PolicyPlatformType;
  settingCount: number;
  settingStates?: DeviceConfigurationSettingState[];
  state: ComplianceStatus;
  version: number;
  //#endregion
}