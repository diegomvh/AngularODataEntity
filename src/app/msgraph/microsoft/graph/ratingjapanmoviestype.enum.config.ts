import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingJapanMoviesType } from './ratingjapanmoviestype.enum';
//#endregion

export const RatingJapanMoviesTypeConfig = {
  name: "ratingJapanMoviesType",
  members: RatingJapanMoviesType
} as EnumTypeConfig<RatingJapanMoviesType>;