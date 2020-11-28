import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { AndroidCompliancePolicy } from './androidcompliancepolicy.entity';
import { AndroidCompliancePolicyModel } from './androidcompliancepolicy.model';
import { AndroidCompliancePolicyCollection } from './androidcompliancepolicy.collection';
//#endregion

export const AndroidCompliancePolicyConfig = {
  name: "androidCompliancePolicy",
  base: "microsoft.graph.deviceCompliancePolicy",
  model: AndroidCompliancePolicyModel,
  collection: AndroidCompliancePolicyCollection,
  annotations: [],
  fields: {
    deviceThreatProtectionEnabled: {type: 'Edm.Boolean', nullable: false},
    deviceThreatProtectionRequiredSecurityLevel: {type: 'graph.deviceThreatProtectionLevel', nullable: false},
    minAndroidSecurityPatchLevel: {type: 'Edm.String'},
    osMaximumVersion: {type: 'Edm.String'},
    osMinimumVersion: {type: 'Edm.String'},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeLock: {type: 'Edm.Int32'},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    passwordRequired: {type: 'Edm.Boolean', nullable: false},
    passwordRequiredType: {type: 'graph.androidRequiredPasswordType', nullable: false},
    securityBlockJailbrokenDevices: {type: 'Edm.Boolean', nullable: false},
    securityDisableUsbDebugging: {type: 'Edm.Boolean', nullable: false},
    securityPreventInstallAppsFromUnknownSources: {type: 'Edm.Boolean', nullable: false},
    securityRequireCompanyPortalAppIntegrity: {type: 'Edm.Boolean', nullable: false},
    securityRequireGooglePlayServices: {type: 'Edm.Boolean', nullable: false},
    securityRequireSafetyNetAttestationBasicIntegrity: {type: 'Edm.Boolean', nullable: false},
    securityRequireSafetyNetAttestationCertifiedDevice: {type: 'Edm.Boolean', nullable: false},
    securityRequireUpToDateSecurityProviders: {type: 'Edm.Boolean', nullable: false},
    securityRequireVerifyApps: {type: 'Edm.Boolean', nullable: false},
    storageRequireEncryption: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<AndroidCompliancePolicy>;