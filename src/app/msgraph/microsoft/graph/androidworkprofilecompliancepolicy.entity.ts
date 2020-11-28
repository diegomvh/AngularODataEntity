import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceCompliancePolicy } from './devicecompliancepolicy.entity';
import { AndroidRequiredPasswordType } from './androidrequiredpasswordtype.enum';
import { DeviceThreatProtectionLevel } from './devicethreatprotectionlevel.enum';
import { DeviceCompliancePolicyModel } from './devicecompliancepolicy.model';
import { DeviceCompliancePolicyCollection } from './devicecompliancepolicy.collection';
//#endregion

export interface AndroidWorkProfileCompliancePolicy extends DeviceCompliancePolicy {
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
}