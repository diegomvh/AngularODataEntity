import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { UserFeedbackRating } from './userfeedbackrating.enum';
//#endregion

export const UserFeedbackRatingConfig = {
  name: "UserFeedbackRating",
  members: UserFeedbackRating
} as EnumConfig<UserFeedbackRating>;