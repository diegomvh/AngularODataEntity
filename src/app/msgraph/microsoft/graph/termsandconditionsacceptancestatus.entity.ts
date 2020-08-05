import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TermsAndConditions } from './termsandconditions.entity';
//#endregion

export interface TermsAndConditionsAcceptanceStatus extends Entity {
  //#region ODataApi Properties
  userDisplayName?: string;
  acceptedVersion: number;
  acceptedDateTime: Date;
  userPrincipalName?: string;
  termsAndConditions?: TermsAndConditions;
  //#endregion
}