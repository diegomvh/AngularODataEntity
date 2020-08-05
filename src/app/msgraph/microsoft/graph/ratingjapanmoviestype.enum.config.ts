import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingJapanMoviesType } from './ratingjapanmoviestype.enum';
//#endregion

export const RatingJapanMoviesTypeConfig = {
  name: "RatingJapanMoviesType",
  members: RatingJapanMoviesType
} as EnumConfig<RatingJapanMoviesType>;