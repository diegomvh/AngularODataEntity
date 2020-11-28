import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { WindowsInformationProtection } from './windowsinformationprotection.entity';
import { WindowsInformationProtectionPinCharacterRequirements } from './windowsinformationprotectionpincharacterrequirements.enum';
import { WindowsInformationProtectionModel } from './windowsinformationprotection.model';
import { WindowsInformationProtectionCollection } from './windowsinformationprotection.collection';
//#endregion

export interface WindowsInformationProtectionPolicy extends WindowsInformationProtection {
  //#region ODataApi Properties
  daysWithoutContactBeforeUnenroll: number;
  mdmEnrollmentUrl?: string;
  minutesOfInactivityBeforeDeviceLock: number;
  numberOfPastPinsRemembered: number;
  passwordMaximumAttemptCount: number;
  pinExpirationDays: number;
  pinLowercaseLetters: WindowsInformationProtectionPinCharacterRequirements;
  pinMinimumLength: number;
  pinSpecialCharacters: WindowsInformationProtectionPinCharacterRequirements;
  pinUppercaseLetters: WindowsInformationProtectionPinCharacterRequirements;
  revokeOnMdmHandoffDisabled: boolean;
  windowsHelloForBusinessBlocked: boolean;
  //#endregion
}