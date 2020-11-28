import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingUnitedStatesMoviesType } from './ratingunitedstatesmoviestype.enum';
//#endregion

export const RatingUnitedStatesMoviesTypeConfig = {
  name: "ratingUnitedStatesMoviesType",
  members: RatingUnitedStatesMoviesType
} as EnumTypeConfig<RatingUnitedStatesMoviesType>;