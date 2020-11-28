import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows10CompliancePolicy } from './windows10compliancepolicy.entity';
import { Windows10CompliancePolicyModel } from './windows10compliancepolicy.model';
import { Windows10CompliancePolicyCollection } from './windows10compliancepolicy.collection';
//#endregion

export const Windows10CompliancePolicyConfig = {
  name: "windows10CompliancePolicy",
  base: "microsoft.graph.deviceCompliancePolicy",
  model: Windows10CompliancePolicyModel,
  collection: Windows10CompliancePolicyCollection,
  annotations: [],
  fields: {
    bitLockerEnabled: {type: 'Edm.Boolean', nullable: false},
    codeIntegrityEnabled: {type: 'Edm.Boolean', nullable: false},
    earlyLaunchAntiMalwareDriverEnabled: {type: 'Edm.Boolean', nullable: false},
    mobileOsMaximumVersion: {type: 'Edm.String'},
    mobileOsMinimumVersion: {type: 'Edm.String'},
    osMaximumVersion: {type: 'Edm.String'},
    osMinimumVersion: {type: 'Edm.String'},
    passwordBlockSimple: {type: 'Edm.Boolean', nullable: false},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinimumCharacterSetCount: {type: 'Edm.Int32'},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeLock: {type: 'Edm.Int32'},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    passwordRequired: {type: 'Edm.Boolean', nullable: false},
    passwordRequiredToUnlockFromIdle: {type: 'Edm.Boolean', nullable: false},
    passwordRequiredType: {type: 'graph.requiredPasswordType', nullable: false},
    requireHealthyDeviceReport: {type: 'Edm.Boolean', nullable: false},
    secureBootEnabled: {type: 'Edm.Boolean', nullable: false},
    storageRequireEncryption: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<Windows10CompliancePolicy>;