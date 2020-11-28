import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsPhone81CompliancePolicy } from './windowsphone81compliancepolicy.entity';
import { WindowsPhone81CompliancePolicyModel } from './windowsphone81compliancepolicy.model';
import { WindowsPhone81CompliancePolicyCollection } from './windowsphone81compliancepolicy.collection';
//#endregion

export const WindowsPhone81CompliancePolicyConfig = {
  name: "windowsPhone81CompliancePolicy",
  base: "microsoft.graph.deviceCompliancePolicy",
  model: WindowsPhone81CompliancePolicyModel,
  collection: WindowsPhone81CompliancePolicyCollection,
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
} as EntityConfig<WindowsPhone81CompliancePolicy>;