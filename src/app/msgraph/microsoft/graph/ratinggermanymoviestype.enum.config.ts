import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingGermanyMoviesType } from './ratinggermanymoviestype.enum';
//#endregion

export const RatingGermanyMoviesTypeConfig = {
  name: "RatingGermanyMoviesType",
  members: RatingGermanyMoviesType
} as EnumConfig<RatingGermanyMoviesType>;