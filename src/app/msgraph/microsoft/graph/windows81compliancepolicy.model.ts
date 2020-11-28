import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceCompliancePolicyModel } from './devicecompliancepolicy.model';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { Windows81CompliancePolicy } from './windows81compliancepolicy.entity';
import { Windows81CompliancePolicyCollection } from './windows81compliancepolicy.collection';
//#endregion

export class Windows81CompliancePolicyModel<E extends Windows81CompliancePolicy> extends DeviceCompliancePolicyModel<E> {
  //#region ODataApi Properties
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
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}