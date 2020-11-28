import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { UserFeedbackRating } from './userfeedbackrating.enum';
import { FeedbackTokenSet } from './feedbacktokenset.entity';
import { UserFeedback } from './userfeedback.entity';
import { FeedbackTokenSetModel } from './feedbacktokenset.model';
import { FeedbackTokenSetCollection } from './feedbacktokenset.collection';
import { UserFeedbackCollection } from './userfeedback.collection';
//#endregion

export class UserFeedbackModel<E extends UserFeedback> extends ODataModel<E> {
  //#region ODataApi Properties
  rating: UserFeedbackRating;
  text?: string;
  tokens?: FeedbackTokenSetModel<FeedbackTokenSet>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}