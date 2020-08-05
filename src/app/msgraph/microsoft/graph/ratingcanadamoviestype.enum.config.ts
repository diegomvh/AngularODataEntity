import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingCanadaMoviesType } from './ratingcanadamoviestype.enum';
//#endregion

export const RatingCanadaMoviesTypeConfig = {
  name: "ratingCanadaMoviesType",
  members: RatingCanadaMoviesType
} as EnumConfig<RatingCanadaMoviesType>;