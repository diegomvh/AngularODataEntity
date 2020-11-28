import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { MacOSCompliancePolicy } from './macoscompliancepolicy.entity';
import { MacOSCompliancePolicyModel } from './macoscompliancepolicy.model';
import { MacOSCompliancePolicyCollection } from './macoscompliancepolicy.collection';
//#endregion

export const MacOSCompliancePolicyConfig = {
  name: "macOSCompliancePolicy",
  base: "microsoft.graph.deviceCompliancePolicy",
  model: MacOSCompliancePolicyModel,
  collection: MacOSCompliancePolicyCollection,
  annotations: [],
  fields: {
    deviceThreatProtectionEnabled: {type: 'Edm.Boolean', nullable: false},
    deviceThreatProtectionRequiredSecurityLevel: {type: 'graph.deviceThreatProtectionLevel', nullable: false},
    firewallBlockAllIncoming: {type: 'Edm.Boolean', nullable: false},
    firewallEnabled: {type: 'Edm.Boolean', nullable: false},
    firewallEnableStealthMode: {type: 'Edm.Boolean', nullable: false},
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
    storageRequireEncryption: {type: 'Edm.Boolean', nullable: false},
    systemIntegrityProtectionEnabled: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<MacOSCompliancePolicy>;