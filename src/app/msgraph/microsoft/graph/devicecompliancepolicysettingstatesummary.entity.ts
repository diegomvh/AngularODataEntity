import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PolicyPlatformType } from './policyplatformtype.enum';
import { DeviceComplianceSettingState } from './devicecompliancesettingstate.entity';
//#endregion

export interface DeviceCompliancePolicySettingStateSummary extends Entity {
  //#region ODataApi Properties
  setting?: string;
  settingName?: string;
  platformType: PolicyPlatformType;
  unknownDeviceCount: number;
  notApplicableDeviceCount: number;
  compliantDeviceCount: number;
  remediatedDeviceCount: number;
  nonCompliantDeviceCount: number;
  errorDeviceCount: number;
  conflictDeviceCount: number;
  deviceComplianceSettingStates?: DeviceComplianceSettingState[];
  //#endregion
}