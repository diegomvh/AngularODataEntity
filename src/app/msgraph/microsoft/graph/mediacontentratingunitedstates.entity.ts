import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RatingUnitedStatesMoviesType } from './ratingunitedstatesmoviestype.enum';
import { RatingUnitedStatesTelevisionType } from './ratingunitedstatestelevisiontype.enum';
//#endregion

export interface MediaContentRatingUnitedStates {
  //#region ODataApi Properties
  movieRating: RatingUnitedStatesMoviesType;
  tvRating: RatingUnitedStatesTelevisionType;
  //#endregion
}