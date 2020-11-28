import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceCompliancePolicyModel } from './devicecompliancepolicy.model';
import { DeviceThreatProtectionLevel } from './devicethreatprotectionlevel.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { IosCompliancePolicy } from './ioscompliancepolicy.entity';
import { IosCompliancePolicyCollection } from './ioscompliancepolicy.collection';
//#endregion

export class IosCompliancePolicyModel<E extends IosCompliancePolicy> extends DeviceCompliancePolicyModel<E> {
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
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}