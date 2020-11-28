import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { PolicyPlatformType } from './policyplatformtype.enum';
import { DeviceComplianceSettingState } from './devicecompliancesettingstate.entity';
import { EntityModel } from './entity.model';
import { DeviceComplianceSettingStateModel } from './devicecompliancesettingstate.model';
import { EntityCollection } from './entity.collection';
import { DeviceComplianceSettingStateCollection } from './devicecompliancesettingstate.collection';
//#endregion

export interface DeviceCompliancePolicySettingStateSummary extends Entity {
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
  deviceComplianceSettingStates?: DeviceComplianceSettingState[];
  //#endregion
}