import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
import { DeviceThreatProtectionLevel } from './devicethreatprotectionlevel.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { DeviceCompliancePolicyModel } from './devicecompliancepolicy.model';
import { DeviceCompliancePolicyCollection } from './devicecompliancepolicy.collection';
//#endregion

export interface IosCompliancePolicy extends DeviceCompliancePolicy {
  //#region ODataApi Properties
  deviceThreatProtectionEnabled: boolean;
  deviceThreatProtectionRequiredSecurityLevel: DeviceThreatProtectionLevel;
  managedEmailProfileRequired: boolean;
  osMaximumVersion?: string;
  osMinimumVersion?: string;
  passcodeBlockSimple: boolean;
  passcodeExpirationDays?: number;
  passcodeMinimumCharacterSetCount?: number;
  passcodeMinimumLength?: number;
  passcodeMinutesOfInactivityBeforeLock?: number;
  passcodePreviousPasscodeBlockCount?: number;
  passcodeRequired: boolean;
  passcodeRequiredType: RequiredPasswordType;
  securityBlockJailbrokenDevices: boolean;
  //#endregion
}