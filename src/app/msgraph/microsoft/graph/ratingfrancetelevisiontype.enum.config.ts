import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingFranceTelevisionType } from './ratingfrancetelevisiontype.enum';
//#endregion

export const RatingFranceTelevisionTypeConfig = {
  name: "ratingFranceTelevisionType",
  members: RatingFranceTelevisionType
} as EnumTypeConfig<RatingFranceTelevisionType>;