import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtectionPolicy } from './windowsinformationprotectionpolicy.entity';
import { WindowsInformationProtectionPolicyModel } from './windowsinformationprotectionpolicy.model';
import { WindowsInformationProtectionPolicyCollection } from './windowsinformationprotectionpolicy.collection';
//#endregion

export const WindowsInformationProtectionPolicyConfig = {
  name: "windowsInformationProtectionPolicy",
  base: "microsoft.graph.windowsInformationProtection",
  model: WindowsInformationProtectionPolicyModel,
  collection: WindowsInformationProtectionPolicyCollection,
  annotations: [],
  fields: {
    daysWithoutContactBeforeUnenroll: {type: 'Edm.Int32', nullable: false},
    mdmEnrollmentUrl: {type: 'Edm.String'},
    minutesOfInactivityBeforeDeviceLock: {type: 'Edm.Int32', nullable: false},
    numberOfPastPinsRemembered: {type: 'Edm.Int32', nullable: false},
    passwordMaximumAttemptCount: {type: 'Edm.Int32', nullable: false},
    pinExpirationDays: {type: 'Edm.Int32', nullable: false},
    pinLowercaseLetters: {type: 'graph.windowsInformationProtectionPinCharacterRequirements', nullable: false},
    pinMinimumLength: {type: 'Edm.Int32', nullable: false},
    pinSpecialCharacters: {type: 'graph.windowsInformationProtectionPinCharacterRequirements', nullable: false},
    pinUppercaseLetters: {type: 'graph.windowsInformationProtectionPinCharacterRequirements', nullable: false},
    revokeOnMdmHandoffDisabled: {type: 'Edm.Boolean', nullable: false},
    windowsHelloForBusinessBlocked: {type: 'Edm.Boolean', nullable: false}
  }
} as StructuredTypeConfig<WindowsInformationProtectionPolicy>;