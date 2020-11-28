import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { TermsAndConditions } from './termsandconditions.entity';
import { TermsAndConditionsAcceptanceStatus } from './termsandconditionsacceptancestatus.entity';
import { TermsAndConditionsAssignment } from './termsandconditionsassignment.entity';
import { TermsAndConditionsAcceptanceStatusModel } from './termsandconditionsacceptancestatus.model';
import { TermsAndConditionsAssignmentModel } from './termsandconditionsassignment.model';
import { TermsAndConditionsCollection } from './termsandconditions.collection';
import { TermsAndConditionsAcceptanceStatusCollection } from './termsandconditionsacceptancestatus.collection';
import { TermsAndConditionsAssignmentCollection } from './termsandconditionsassignment.collection';
//#endregion

export class TermsAndConditionsModel<E extends TermsAndConditions> extends EntityModel<E> {
  //#region ODataApi Properties
  acceptanceStatement?: string;
  bodyText?: string;
  createdDateTime: Date;
  description?: string;
  displayName: string;
  lastModifiedDateTime: Date;
  title?: string;
  version: number;
  acceptanceStatuses?: TermsAndConditionsAcceptanceStatusCollection<TermsAndConditionsAcceptanceStatus, TermsAndConditionsAcceptanceStatusModel<TermsAndConditionsAcceptanceStatus>>;
  assignments?: TermsAndConditionsAssignmentCollection<TermsAndConditionsAssignment, TermsAndConditionsAssignmentModel<TermsAndConditionsAssignment>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}