import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingAppsType } from './ratingappstype.enum';
//#endregion

export const RatingAppsTypeConfig = {
  name: "ratingAppsType",
  members: RatingAppsType
} as EnumConfig<RatingAppsType>;