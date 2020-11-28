import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceCompliancePolicyModel } from './devicecompliancepolicy.model';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { Windows10CompliancePolicy } from './windows10compliancepolicy.entity';
import { Windows10CompliancePolicyCollection } from './windows10compliancepolicy.collection';
//#endregion

export class Windows10CompliancePolicyModel<E extends Windows10CompliancePolicy> extends DeviceCompliancePolicyModel<E> {
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
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}