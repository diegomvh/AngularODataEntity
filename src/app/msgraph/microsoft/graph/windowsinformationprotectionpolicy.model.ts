import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { WindowsInformationProtectionModel } from './windowsinformationprotection.model';
import { WindowsInformationProtectionPinCharacterRequirements } from './windowsinformationprotectionpincharacterrequirements.enum';
import { WindowsInformationProtectionPolicy } from './windowsinformationprotectionpolicy.entity';
import { WindowsInformationProtectionPolicyCollection } from './windowsinformationprotectionpolicy.collection';
//#endregion

export class WindowsInformationProtectionPolicyModel<E extends WindowsInformationProtectionPolicy> extends WindowsInformationProtectionModel<E> {
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
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}