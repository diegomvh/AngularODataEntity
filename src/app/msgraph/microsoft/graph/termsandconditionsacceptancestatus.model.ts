import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { TermsAndConditions } from './termsandconditions.entity';
import { TermsAndConditionsAcceptanceStatus } from './termsandconditionsacceptancestatus.entity';
import { TermsAndConditionsModel } from './termsandconditions.model';
import { TermsAndConditionsCollection } from './termsandconditions.collection';
import { TermsAndConditionsAcceptanceStatusCollection } from './termsandconditionsacceptancestatus.collection';
//#endregion

export class TermsAndConditionsAcceptanceStatusModel<E extends TermsAndConditionsAcceptanceStatus> extends EntityModel<E> {
  //#region ODataApi Properties
  acceptedDateTime: Date;
  acceptedVersion: number;
  userDisplayName?: string;
  userPrincipalName?: string;
  termsAndConditions?: TermsAndConditionsModel<TermsAndConditions>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}