import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { UserFeedbackRating } from './userfeedbackrating.enum';
import { FeedbackTokenSet } from './feedbacktokenset.entity';
//#endregion

export interface UserFeedback {
  //#region ODataApi Properties
  text?: string;
  rating: UserFeedbackRating;
  tokens?: FeedbackTokenSet;
  //#endregion
}