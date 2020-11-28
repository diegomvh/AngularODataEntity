import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TermsAndConditions } from './termsandconditions.entity';
import { EntityModel } from './entity.model';
import { TermsAndConditionsModel } from './termsandconditions.model';
import { EntityCollection } from './entity.collection';
import { TermsAndConditionsCollection } from './termsandconditions.collection';
//#endregion

export interface TermsAndConditionsAcceptanceStatus extends Entity {
  //#region ODataApi Properties
  acceptedDateTime: Date;
  acceptedVersion: number;
  userDisplayName?: string;
  userPrincipalName?: string;
  termsAndConditions?: TermsAndConditions;
  //#endregion
}