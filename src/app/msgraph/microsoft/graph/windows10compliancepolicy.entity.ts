import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { DeviceCompliancePolicyModel } from './devicecompliancepolicy.model';
import { DeviceCompliancePolicyCollection } from './devicecompliancepolicy.collection';
//#endregion

export interface Windows10CompliancePolicy extends DeviceCompliancePolicy {
  //#region ODataApi Properties
  bitLockerEnabled: boolean;
  codeIntegrityEnabled: boolean;
  earlyLaunchAntiMalwareDriverEnabled: boolean;
  mobileOsMaximumVersion?: string;
  mobileOsMinimumVersion?: string;
  osMaximumVersion?: string;
  osMinimumVersion?: string;
  passwordBlockSimple: boolean;
  passwordExpirationDays?: number;
  passwordMinimumCharacterSetCount?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeLock?: number;
  passwordPreviousPasswordBlockCount?: number;
  passwordRequired: boolean;
  passwordRequiredToUnlockFromIdle: boolean;
  passwordRequiredType: RequiredPasswordType;
  requireHealthyDeviceReport: boolean;
  secureBootEnabled: boolean;
  storageRequireEncryption: boolean;
  //#endregion
}