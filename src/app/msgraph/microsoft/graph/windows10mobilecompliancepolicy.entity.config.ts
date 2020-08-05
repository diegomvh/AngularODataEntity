import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows10MobileCompliancePolicy } from './windows10mobilecompliancepolicy.entity';
//#endregion

export const Windows10MobileCompliancePolicyConfig = {
  name: "windows10MobileCompliancePolicy",
  base: "microsoft.graph.deviceCompliancePolicy",
  annotations: [],
  fields: {
    passwordRequired: {type: 'Edm.Boolean', nullable: false},
    passwordBlockSimple: {type: 'Edm.Boolean', nullable: false},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinimumCharacterSetCount: {type: 'Edm.Int32'},
    passwordRequiredType: {type: 'graph.requiredPasswordType', nullable: false},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeLock: {type: 'Edm.Int32'},
    passwordRequireToUnlockFromIdle: {type: 'Edm.Boolean', nullable: false},
    osMinimumVersion: {type: 'Edm.String'},
    osMaximumVersion: {type: 'Edm.String'},
    earlyLaunchAntiMalwareDriverEnabled: {type: 'Edm.Boolean', nullable: false},
    bitLockerEnabled: {type: 'Edm.Boolean', nullable: false},
    secureBootEnabled: {type: 'Edm.Boolean', nullable: false},
    codeIntegrityEnabled: {type: 'Edm.Boolean', nullable: false},
    storageRequireEncryption: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<Windows10MobileCompliancePolicy>;