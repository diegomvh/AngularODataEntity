import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
import { AndroidRequiredPasswordType } from './androidrequiredpasswordtype.enum';
import { DeviceThreatProtectionLevel } from './devicethreatprotectionlevel.enum';
//#endregion

export interface AndroidWorkProfileCompliancePolicy extends DeviceCompliancePolicy {
  //#region ODataApi Properties
  passwordRequired: boolean;
  passwordMinimumLength?: number;
  passwordRequiredType: AndroidRequiredPasswordType;
  passwordMinutesOfInactivityBeforeLock?: number;
  passwordExpirationDays?: number;
  passwordPreviousPasswordBlockCount?: number;
  securityPreventInstallAppsFromUnknownSources: boolean;
  securityDisableUsbDebugging: boolean;
  securityRequireVerifyApps: boolean;
  deviceThreatProtectionEnabled: boolean;
  deviceThreatProtectionRequiredSecurityLevel: DeviceThreatProtectionLevel;
  securityBlockJailbrokenDevices: boolean;
  osMinimumVersion?: string;
  osMaximumVersion?: string;
  minAndroidSecurityPatchLevel?: string;
  storageRequireEncryption: boolean;
  securityRequireSafetyNetAttestationBasicIntegrity: boolean;
  securityRequireSafetyNetAttestationCertifiedDevice: boolean;
  securityRequireGooglePlayServices: boolean;
  securityRequireUpToDateSecurityProviders: boolean;
  securityRequireCompanyPortalAppIntegrity: boolean;
  //#endregion
}