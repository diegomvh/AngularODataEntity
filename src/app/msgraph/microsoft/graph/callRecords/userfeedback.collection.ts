import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UserFeedbackRating } from './userfeedbackrating.enum';
import { FeedbackTokenSet } from './feedbacktokenset.entity';
import { UserFeedback } from './userfeedback.entity';
import { FeedbackTokenSetModel } from './feedbacktokenset.model';
import { UserFeedbackModel } from './userfeedback.model';
import { FeedbackTokenSetCollection } from './feedbacktokenset.collection';
//#endregion

export class UserFeedbackCollection<E extends UserFeedback, M extends UserFeedbackModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}