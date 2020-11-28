import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingIrelandMoviesType } from './ratingirelandmoviestype.enum';
//#endregion

export const RatingIrelandMoviesTypeConfig = {
  name: "ratingIrelandMoviesType",
  members: RatingIrelandMoviesType
} as EnumTypeConfig<RatingIrelandMoviesType>;