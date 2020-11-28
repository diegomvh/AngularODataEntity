import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RatingUnitedKingdomMoviesType } from './ratingunitedkingdommoviestype.enum';
import { RatingUnitedKingdomTelevisionType } from './ratingunitedkingdomtelevisiontype.enum';
//#endregion

export interface MediaContentRatingUnitedKingdom {
  //#region ODataApi Properties
  movieRating: RatingUnitedKingdomMoviesType;
  tvRating: RatingUnitedKingdomTelevisionType;
  //#endregion
}