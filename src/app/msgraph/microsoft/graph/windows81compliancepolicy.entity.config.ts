import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows81CompliancePolicy } from './windows81compliancepolicy.entity';
//#endregion

export const Windows81CompliancePolicyConfig = {
  name: "Windows81CompliancePolicy",
  base: "microsoft.graph.deviceCompliancePolicy",
  annotations: [],
  fields: {
    passwordRequired: {type: 'Edm.Boolean', nullable: false},
    passwordBlockSimple: {type: 'Edm.Boolean', nullable: false},
    passwordExpirationDays: {type: 'Edm.Int32'},
    passwordMinimumLength: {type: 'Edm.Int32'},
    passwordMinutesOfInactivityBeforeLock: {type: 'Edm.Int32'},
    passwordMinimumCharacterSetCount: {type: 'Edm.Int32'},
    passwordRequiredType: {type: 'graph.requiredPasswordType', nullable: false},
    passwordPreviousPasswordBlockCount: {type: 'Edm.Int32'},
    osMinimumVersion: {type: 'Edm.String'},
    osMaximumVersion: {type: 'Edm.String'},
    storageRequireEncryption: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<Windows81CompliancePolicy>;