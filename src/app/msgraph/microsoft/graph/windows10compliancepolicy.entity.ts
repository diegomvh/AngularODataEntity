import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
//#endregion

export interface Windows10CompliancePolicy extends DeviceCompliancePolicy {
  //#region ODataApi Properties
  passwordRequired: boolean;
  passwordBlockSimple: boolean;
  passwordRequiredToUnlockFromIdle: boolean;
  passwordMinutesOfInactivityBeforeLock?: number;
  passwordExpirationDays?: number;
  passwordMinimumLength?: number;
  passwordMinimumCharacterSetCount?: number;
  passwordRequiredType: RequiredPasswordType;
  passwordPreviousPasswordBlockCount?: number;
  requireHealthyDeviceReport: boolean;
  osMinimumVersion?: string;
  osMaximumVersion?: string;
  mobileOsMinimumVersion?: string;
  mobileOsMaximumVersion?: string;
  earlyLaunchAntiMalwareDriverEnabled: boolean;
  bitLockerEnabled: boolean;
  secureBootEnabled: boolean;
  codeIntegrityEnabled: boolean;
  storageRequireEncryption: boolean;
  //#endregion
}