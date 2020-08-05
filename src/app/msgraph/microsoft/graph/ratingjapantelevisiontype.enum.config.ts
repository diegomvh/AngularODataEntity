import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingJapanTelevisionType } from './ratingjapantelevisiontype.enum';
//#endregion

export const RatingJapanTelevisionTypeConfig = {
  name: "ratingJapanTelevisionType",
  members: RatingJapanTelevisionType
} as EnumConfig<RatingJapanTelevisionType>;