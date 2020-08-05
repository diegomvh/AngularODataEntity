import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingFranceTelevisionType } from './ratingfrancetelevisiontype.enum';
//#endregion

export const RatingFranceTelevisionTypeConfig = {
  name: "RatingFranceTelevisionType",
  members: RatingFranceTelevisionType
} as EnumConfig<RatingFranceTelevisionType>;