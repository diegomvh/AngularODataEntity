import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingGermanyMoviesType } from './ratinggermanymoviestype.enum';
//#endregion

export const RatingGermanyMoviesTypeConfig = {
  name: "ratingGermanyMoviesType",
  members: RatingGermanyMoviesType
} as EnumTypeConfig<RatingGermanyMoviesType>;