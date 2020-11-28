import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosCompliancePolicy } from './ioscompliancepolicy.entity';
import { IosCompliancePolicyModel } from './ioscompliancepolicy.model';
import { IosCompliancePolicyCollection } from './ioscompliancepolicy.collection';
//#endregion

export const IosCompliancePolicyConfig = {
  name: "iosCompliancePolicy",
  base: "microsoft.graph.deviceCompliancePolicy",
  model: IosCompliancePolicyModel,
  collection: IosCompliancePolicyCollection,
  annotations: [],
  fields: {
    deviceThreatProtectionEnabled: {type: 'Edm.Boolean', nullable: false},
    deviceThreatProtectionRequiredSecurityLevel: {type: 'graph.deviceThreatProtectionLevel', nullable: false},
    managedEmailProfileRequired: {type: 'Edm.Boolean', nullable: false},
    osMaximumVersion: {type: 'Edm.String'},
    osMinimumVersion: {type: 'Edm.String'},
    passcodeBlockSimple: {type: 'Edm.Boolean', nullable: false},
    passcodeExpirationDays: {type: 'Edm.Int32'},
    passcodeMinimumCharacterSetCount: {type: 'Edm.Int32'},
    passcodeMinimumLength: {type: 'Edm.Int32'},
    passcodeMinutesOfInactivityBeforeLock: {type: 'Edm.Int32'},
    passcodePreviousPasscodeBlockCount: {type: 'Edm.Int32'},
    passcodeRequired: {type: 'Edm.Boolean', nullable: false},
    passcodeRequiredType: {type: 'graph.requiredPasswordType', nullable: false},
    securityBlockJailbrokenDevices: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<IosCompliancePolicy>;