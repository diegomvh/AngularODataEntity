import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingCanadaMoviesType } from './ratingcanadamoviestype.enum';
//#endregion

export const RatingCanadaMoviesTypeConfig = {
  name: "RatingCanadaMoviesType",
  members: RatingCanadaMoviesType
} as EnumConfig<RatingCanadaMoviesType>;