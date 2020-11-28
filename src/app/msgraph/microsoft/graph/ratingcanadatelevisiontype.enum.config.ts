import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingCanadaTelevisionType } from './ratingcanadatelevisiontype.enum';
//#endregion

export const RatingCanadaTelevisionTypeConfig = {
  name: "ratingCanadaTelevisionType",
  members: RatingCanadaTelevisionType
} as EnumTypeConfig<RatingCanadaTelevisionType>;