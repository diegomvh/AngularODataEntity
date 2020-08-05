﻿import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidCompliancePolicy } from './androidcompliancepolicy.entity';
//#endregion

export const AndroidCompliancePolicyConfig = {
  name: "AndroidCompliancePolicy",
  base: "microsoft.graph.deviceCompliancePolicy",
  annotations: [],
  fields: {
    passwordRequired: {type: 'Edm.Boolean', nullable: false},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordRequiredType: {type: 'graph.androidRequiredPasswordType', nullable: false},
    passwordMinutesOfInactivityBeforeLock: {type: 'Edm.Int32'},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    securityPreventInstallAppsFromUnknownSources: {type: 'Edm.Boolean', nullable: false},
    securityDisableUsbDebugging: {type: 'Edm.Boolean', nullable: false},
    securityRequireVerifyApps: {type: 'Edm.Boolean', nullable: false},
    deviceThreatProtectionEnabled: {type: 'Edm.Boolean', nullable: false},
    deviceThreatProtectionRequiredSecurityLevel: {type: 'graph.deviceThreatProtectionLevel', nullable: false},
    securityBlockJailbrokenDevices: {type: 'Edm.Boolean', nullable: false},
    osMinimumVersion: {type: 'Edm.String'},
    osMaximumVersion: {type: 'Edm.String'},
    minAndroidSecurityPatchLevel: {type: 'Edm.String'},
    storageRequireEncryption: {type: 'Edm.Boolean', nullable: false},
    securityRequireSafetyNetAttestationBasicIntegrity: {type: 'Edm.Boolean', nullable: false},
    securityRequireSafetyNetAttestationCertifiedDevice: {type: 'Edm.Boolean', nullable: false},
    securityRequireGooglePlayServices: {type: 'Edm.Boolean', nullable: false},
    securityRequireUpToDateSecurityProviders: {type: 'Edm.Boolean', nullable: false},
    securityRequireCompanyPortalAppIntegrity: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<AndroidCompliancePolicy>;