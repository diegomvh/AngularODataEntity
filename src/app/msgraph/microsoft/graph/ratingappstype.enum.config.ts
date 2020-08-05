import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingAppsType } from './ratingappstype.enum';
//#endregion

export const RatingAppsTypeConfig = {
  name: "RatingAppsType",
  members: RatingAppsType
} as EnumConfig<RatingAppsType>;