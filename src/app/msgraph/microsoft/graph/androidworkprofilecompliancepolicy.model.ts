import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceCompliancePolicyModel } from './devicecompliancepolicy.model';
import { AndroidRequiredPasswordType } from './androidrequiredpasswordtype.enum';
import { DeviceThreatProtectionLevel } from './devicethreatprotectionlevel.enum';
import { AndroidWorkProfileCompliancePolicy } from './androidworkprofilecompliancepolicy.entity';
import { AndroidWorkProfileCompliancePolicyCollection } from './androidworkprofilecompliancepolicy.collection';
//#endregion

export class AndroidWorkProfileCompliancePolicyModel<E extends AndroidWorkProfileCompliancePolicy> extends DeviceCompliancePolicyModel<E> {
  //#region ODataApi Properties
  deviceThreatProtectionEnabled: boolean;
  deviceThreatProtectionRequiredSecurityLevel: DeviceThreatProtectionLevel;
  minAndroidSecurityPatchLevel?: string;
  osMaximumVersion?: string;
  osMinimumVersion?: string;
  passwordExpirationDays?: number;
  passwordMinimumLength?: number;
  passwordMinutesOfInactivityBeforeLock?: number;
  passwordPreviousPasswordBlockCount?: number;
  passwordRequired: boolean;
  passwordRequiredType: AndroidRequiredPasswordType;
  securityBlockJailbrokenDevices: boolean;
  securityDisableUsbDebugging: boolean;
  securityPreventInstallAppsFromUnknownSources: boolean;
  securityRequireCompanyPortalAppIntegrity: boolean;
  securityRequireGooglePlayServices: boolean;
  securityRequireSafetyNetAttestationBasicIntegrity: boolean;
  securityRequireSafetyNetAttestationCertifiedDevice: boolean;
  securityRequireUpToDateSecurityProviders: boolean;
  securityRequireVerifyApps: boolean;
  storageRequireEncryption: boolean;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}