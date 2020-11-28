import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
import { DeviceThreatProtectionLevel } from './devicethreatprotectionlevel.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { DeviceCompliancePolicyModel } from './devicecompliancepolicy.model';
import { DeviceCompliancePolicyCollection } from './devicecompliancepolicy.collection';
//#endregion

export interface MacOSCompliancePolicy extends DeviceCompliancePolicy {
  //#region ODataApi Properties
  deviceThreatProtectionEnabled: boolean;
  deviceThreatProtectionRequiredSecurityLevel: DeviceThreatProtectionLevel;
  firewallBlockAllIncoming: boolean;
  firewallEnabled: boolean;
  firewallEnableStealthMode: boolean;
  osMaximumVersion?: string;
  osMinimumVersion?: string;
  passwordBlockSimple: boolean;
  passwordExpirationDays?: number;
  passwordMinimumCharacterSetCount?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeLock?: number;
  passwordPreviousPasswordBlockCount?: number;
  passwordRequired: boolean;
  passwordRequiredType: RequiredPasswordType;
  storageRequireEncryption: boolean;
  systemIntegrityProtectionEnabled: boolean;
  //#endregion
}