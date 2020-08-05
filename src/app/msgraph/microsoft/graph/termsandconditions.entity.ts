import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TermsAndConditionsAssignment } from './termsandconditionsassignment.entity';
import { TermsAndConditionsAcceptanceStatus } from './termsandconditionsacceptancestatus.entity';
//#endregion

export interface TermsAndConditions extends Entity {
  //#region ODataApi Properties
  createdDateTime: Date;
  lastModifiedDateTime: Date;
  displayName: string;
  description?: string;
  title?: string;
  bodyText?: string;
  acceptanceStatement?: string;
  version: number;
  assignments?: TermsAndConditionsAssignment[];
  acceptanceStatuses?: TermsAndConditionsAcceptanceStatus[];
  //#endregion
}