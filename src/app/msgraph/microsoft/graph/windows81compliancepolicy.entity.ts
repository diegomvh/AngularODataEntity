import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
//#endregion

export interface Windows81CompliancePolicy extends DeviceCompliancePolicy {
  //#region ODataApi Properties
  passwordRequired: boolean;
  passwordBlockSimple: boolean;
  passwordExpirationDays?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeLock?: number;
  passwordMinimumCharacterSetCount?: number;
  passwordRequiredType: RequiredPasswordType;
  passwordPreviousPasswordBlockCount?: number;
  osMinimumVersion?: string;
  osMaximumVersion?: string;
  storageRequireEncryption: boolean;
  //#endregion
}