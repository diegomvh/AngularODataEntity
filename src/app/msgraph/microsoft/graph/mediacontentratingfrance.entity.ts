import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RatingFranceMoviesType } from './ratingfrancemoviestype.enum';
import { RatingFranceTelevisionType } from './ratingfrancetelevisiontype.enum';
//#endregion

export interface MediaContentRatingFrance {
  //#region ODataApi Properties
  movieRating: RatingFranceMoviesType;
  tvRating: RatingFranceTelevisionType;
  //#endregion
}