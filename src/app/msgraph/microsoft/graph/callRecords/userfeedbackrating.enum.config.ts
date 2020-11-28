import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserFeedbackRating } from './userfeedbackrating.enum';
//#endregion

export const UserFeedbackRatingConfig = {
  name: "userFeedbackRating",
  members: UserFeedbackRating
} as EnumTypeConfig<UserFeedbackRating>;