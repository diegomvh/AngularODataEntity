import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { Windows81CompliancePolicy } from './windows81compliancepolicy.entity';
import { Windows81CompliancePolicyModel } from './windows81compliancepolicy.model';
import { Windows81CompliancePolicyCollection } from './windows81compliancepolicy.collection';
//#endregion

export const Windows81CompliancePolicyConfig = {
  name: "windows81CompliancePolicy",
  base: "microsoft.graph.deviceCompliancePolicy",
  model: Windows81CompliancePolicyModel,
  collection: Windows81CompliancePolicyCollection,
  annotations: [],
  fields: {
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
    storageRequireEncryption: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<Windows81CompliancePolicy>;