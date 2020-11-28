import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { Entity } from './entity.entity';
import { TermsAndConditionsAcceptanceStatus } from './termsandconditionsacceptancestatus.entity';
import { TermsAndConditionsAssignment } from './termsandconditionsassignment.entity';
import { EntityModel } from './entity.model';
import { TermsAndConditionsAcceptanceStatusModel } from './termsandconditionsacceptancestatus.model';
import { TermsAndConditionsAssignmentModel } from './termsandconditionsassignment.model';
import { EntityCollection } from './entity.collection';
import { TermsAndConditionsAcceptanceStatusCollection } from './termsandconditionsacceptancestatus.collection';
import { TermsAndConditionsAssignmentCollection } from './termsandconditionsassignment.collection';
//#endregion

export interface TermsAndConditions extends Entity {
  //#region ODataApi Properties
  acceptanceStatement?: string;
  bodyText?: string;
  createdDateTime: Date;
  description?: string;
  displayName: string;
  lastModifiedDateTime: Date;
  title?: string;
  version: number;
  acceptanceStatuses?: TermsAndConditionsAcceptanceStatus[];
  assignments?: TermsAndConditionsAssignment[];
  //#endregion
}