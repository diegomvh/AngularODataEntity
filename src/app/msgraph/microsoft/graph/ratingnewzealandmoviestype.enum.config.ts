import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingNewZealandMoviesType } from './ratingnewzealandmoviestype.enum';
//#endregion

export const RatingNewZealandMoviesTypeConfig = {
  name: "RatingNewZealandMoviesType",
  members: RatingNewZealandMoviesType
} as EnumConfig<RatingNewZealandMoviesType>;