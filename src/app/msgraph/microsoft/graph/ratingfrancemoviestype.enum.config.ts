import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingFranceMoviesType } from './ratingfrancemoviestype.enum';
//#endregion

export const RatingFranceMoviesTypeConfig = {
  name: "ratingFranceMoviesType",
  members: RatingFranceMoviesType
} as EnumTypeConfig<RatingFranceMoviesType>;