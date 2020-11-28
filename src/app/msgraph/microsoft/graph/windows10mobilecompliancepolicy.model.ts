import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceCompliancePolicyModel } from './devicecompliancepolicy.model';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { Windows10MobileCompliancePolicy } from './windows10mobilecompliancepolicy.entity';
import { Windows10MobileCompliancePolicyCollection } from './windows10mobilecompliancepolicy.collection';
//#endregion

export class Windows10MobileCompliancePolicyModel<E extends Windows10MobileCompliancePolicy> extends DeviceCompliancePolicyModel<E> {
  //#region ODataApi Properties
  bitLockerEnabled: boolean;
  codeIntegrityEnabled: boolean;
  earlyLaunchAntiMalwareDriverEnabled: boolean;
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
  passwordRequireToUnlockFromIdle: boolean;
  secureBootEnabled: boolean;
  storageRequireEncryption: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}