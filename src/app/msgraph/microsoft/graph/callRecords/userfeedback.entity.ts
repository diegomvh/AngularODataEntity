import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { UserFeedbackRating } from './userfeedbackrating.enum';
import { FeedbackTokenSet } from './feedbacktokenset.entity';
import { FeedbackTokenSetModel } from './feedbacktokenset.model';
import { FeedbackTokenSetCollection } from './feedbacktokenset.collection';
//#endregion

export interface UserFeedback {
  //#region ODataApi Properties
  rating: UserFeedbackRating;
  text?: string;
  tokens?: FeedbackTokenSet;
  //#endregion
}