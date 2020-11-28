import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { TermsAndConditions } from './termsandconditions.entity';
import { TermsAndConditionsAcceptanceStatus } from './termsandconditionsacceptancestatus.entity';
import { TermsAndConditionsAssignment } from './termsandconditionsassignment.entity';
import { TermsAndConditionsModel } from './termsandconditions.model';
import { TermsAndConditionsAcceptanceStatusModel } from './termsandconditionsacceptancestatus.model';
import { TermsAndConditionsAssignmentModel } from './termsandconditionsassignment.model';
import { TermsAndConditionsAcceptanceStatusCollection } from './termsandconditionsacceptancestatus.collection';
import { TermsAndConditionsAssignmentCollection } from './termsandconditionsassignment.collection';
//#endregion

export class TermsAndConditionsCollection<E extends TermsAndConditions, M extends TermsAndConditionsModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}