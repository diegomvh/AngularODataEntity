import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { RatingUnitedKingdomMoviesType } from './ratingunitedkingdommoviestype.enum';
//#endregion

export const RatingUnitedKingdomMoviesTypeConfig = {
  name: "ratingUnitedKingdomMoviesType",
  members: RatingUnitedKingdomMoviesType
} as EnumConfig<RatingUnitedKingdomMoviesType>;