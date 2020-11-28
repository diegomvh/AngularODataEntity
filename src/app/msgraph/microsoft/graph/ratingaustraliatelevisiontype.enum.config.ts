import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingAustraliaTelevisionType } from './ratingaustraliatelevisiontype.enum';
//#endregion

export const RatingAustraliaTelevisionTypeConfig = {
  name: "ratingAustraliaTelevisionType",
  members: RatingAustraliaTelevisionType
} as EnumTypeConfig<RatingAustraliaTelevisionType>;