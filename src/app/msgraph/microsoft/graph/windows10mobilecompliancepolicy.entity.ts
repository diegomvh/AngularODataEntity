import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
//#endregion

export interface Windows10MobileCompliancePolicy extends DeviceCompliancePolicy {
  //#region ODataApi Properties
  passwordRequired: boolean;
  passwordBlockSimple: boolean;
  passwordMinimumLength?: number;
  passwordMinimumCharacterSetCount?: number;
  passwordRequiredType: RequiredPasswordType;
  passwordPreviousPasswordBlockCount?: number;
  passwordExpirationDays?: number;
  passwordMinutesOfInactivityBeforeLock?: number;
  passwordRequireToUnlockFromIdle: boolean;
  osMinimumVersion?: string;
  osMaximumVersion?: string;
  earlyLaunchAntiMalwareDriverEnabled: boolean;
  bitLockerEnabled: boolean;
  secureBootEnabled: boolean;
  codeIntegrityEnabled: boolean;
  storageRequireEncryption: boolean;
  //#endregion
}