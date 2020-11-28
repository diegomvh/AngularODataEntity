import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingGermanyTelevisionType } from './ratinggermanytelevisiontype.enum';
//#endregion

export const RatingGermanyTelevisionTypeConfig = {
  name: "ratingGermanyTelevisionType",
  members: RatingGermanyTelevisionType
} as EnumTypeConfig<RatingGermanyTelevisionType>;