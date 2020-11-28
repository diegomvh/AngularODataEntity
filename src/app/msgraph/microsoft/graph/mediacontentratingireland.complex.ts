import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RatingIrelandMoviesType } from './ratingirelandmoviestype.enum';
import { RatingIrelandTelevisionType } from './ratingirelandtelevisiontype.enum';
//#endregion

export interface MediaContentRatingIreland {
  //#region ODataApi Properties
  movieRating: RatingIrelandMoviesType;
  tvRating: RatingIrelandTelevisionType;
  //#endregion
}