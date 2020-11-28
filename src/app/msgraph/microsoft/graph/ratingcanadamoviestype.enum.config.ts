import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingCanadaMoviesType } from './ratingcanadamoviestype.enum';
//#endregion

export const RatingCanadaMoviesTypeConfig = {
  name: "ratingCanadaMoviesType",
  members: RatingCanadaMoviesType
} as EnumTypeConfig<RatingCanadaMoviesType>;