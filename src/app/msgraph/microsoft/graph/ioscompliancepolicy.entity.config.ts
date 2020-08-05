import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { IosCompliancePolicy } from './ioscompliancepolicy.entity';
//#endregion

export const IosCompliancePolicyConfig = {
  name: "IosCompliancePolicy",
  base: "microsoft.graph.deviceCompliancePolicy",
  annotations: [],
  fields: {
    passcodeBlockSimple: {type: 'Edm.Boolean', nullable: false},
    passcodeExpirationDays: {type: 'Edm.Int32'},
    passcodeMinimumLength: {type: 'Edm.Int32'},
    passcodeMinutesOfInactivityBeforeLock: {type: 'Edm.Int32'},
    passcodePreviousPasscodeBlockCount: {type: 'Edm.Int32'},
    passcodeMinimumCharacterSetCount: {type: 'Edm.Int32'},
    passcodeRequiredType: {type: 'graph.requiredPasswordType', nullable: false},
    passcodeRequired: {type: 'Edm.Boolean', nullable: false},
    osMinimumVersion: {type: 'Edm.String'},
    osMaximumVersion: {type: 'Edm.String'},
    securityBlockJailbrokenDevices: {type: 'Edm.Boolean', nullable: false},
    deviceThreatProtectionEnabled: {type: 'Edm.Boolean', nullable: false},
    deviceThreatProtectionRequiredSecurityLevel: {type: 'graph.deviceThreatProtectionLevel', nullable: false},
    managedEmailProfileRequired: {type: 'Edm.Boolean', nullable: false}
  }
} as EntityConfig<IosCompliancePolicy>;