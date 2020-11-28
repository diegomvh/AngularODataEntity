import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceCompliancePolicyModel } from './devicecompliancepolicy.model';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { WindowsPhone81CompliancePolicy } from './windowsphone81compliancepolicy.entity';
import { WindowsPhone81CompliancePolicyCollection } from './windowsphone81compliancepolicy.collection';
//#endregion

export class WindowsPhone81CompliancePolicyModel<E extends WindowsPhone81CompliancePolicy> extends DeviceCompliancePolicyModel<E> {
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