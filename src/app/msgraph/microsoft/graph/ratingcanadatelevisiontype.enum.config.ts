import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingCanadaTelevisionType } from './ratingcanadatelevisiontype.enum';
//#endregion

export const RatingCanadaTelevisionTypeConfig = {
  name: "RatingCanadaTelevisionType",
  members: RatingCanadaTelevisionType
} as EnumConfig<RatingCanadaTelevisionType>;