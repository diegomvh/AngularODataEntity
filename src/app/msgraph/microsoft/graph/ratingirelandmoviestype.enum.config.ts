import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingIrelandMoviesType } from './ratingirelandmoviestype.enum';
//#endregion

export const RatingIrelandMoviesTypeConfig = {
  name: "RatingIrelandMoviesType",
  members: RatingIrelandMoviesType
} as EnumConfig<RatingIrelandMoviesType>;