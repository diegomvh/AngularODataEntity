import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingAustraliaMoviesType } from './ratingaustraliamoviestype.enum';
//#endregion

export const RatingAustraliaMoviesTypeConfig = {
  name: "RatingAustraliaMoviesType",
  members: RatingAustraliaMoviesType
} as EnumConfig<RatingAustraliaMoviesType>;