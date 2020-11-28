import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceCompliancePolicyModel } from './devicecompliancepolicy.model';
import { DeviceThreatProtectionLevel } from './devicethreatprotectionlevel.enum';
import { RequiredPasswordType } from './requiredpasswordtype.enum';
import { MacOSCompliancePolicy } from './macoscompliancepolicy.entity';
import { MacOSCompliancePolicyCollection } from './macoscompliancepolicy.collection';
//#endregion

export class MacOSCompliancePolicyModel<E extends MacOSCompliancePolicy> extends DeviceCompliancePolicyModel<E> {
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
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}