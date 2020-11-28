import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows10MobileCompliancePolicy } from './windows10mobilecompliancepolicy.entity';
import { Windows10MobileCompliancePolicyModel } from './windows10mobilecompliancepolicy.model';
import { Windows10MobileCompliancePolicyCollection } from './windows10mobilecompliancepolicy.collection';
//#endregion

export const Windows10MobileCompliancePolicyConfig = {
  name: "windows10MobileCompliancePolicy",
  base: "microsoft.graph.deviceCompliancePolicy",
  model: Windows10MobileCompliancePolicyModel,
  collection: Windows10MobileCompliancePolicyCollection,
  annotations: [],
  fields: {
    bitLockerEnabled: {type: 'Edm.Boolean', nullable: false},
    codeIntegrityEnabled: {type: 'Edm.Boolean', nullable: false},
    earlyLaunchAntiMalwareDriverEnabled: {type: 'Edm.Boolean', nullable: false},
    osMaximumVersion: {type: 'Edm.String'},
    osMinimumVersion: {type: 'Edm.String'},
    passwordBlockSimple: {type: 'Edm.Boolean', nullable: false},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinimumCharacterSetCount: {type: 'Edm.Int32'},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeLock: {type: 'Edm.Int32'},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    passwordRequired: {type: 'Edm.Boolean', nullable: false},
    passwordRequiredType: {type: 'graph.requiredPasswordType', nullable: false},
    passwordRequireToUnlockFromIdle: {type: 'Edm.Boolean', nullable: false},
    secureBootEnabled: {type: 'Edm.Boolean', nullable: false},
    storageRequireEncryption: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<Windows10MobileCompliancePolicy>;