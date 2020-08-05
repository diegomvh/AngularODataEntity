import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RatingJapanMoviesType } from './ratingjapanmoviestype.enum';
import { RatingJapanTelevisionType } from './ratingjapantelevisiontype.enum';
//#endregion

export interface MediaContentRatingJapan {
  //#region ODataApi Properties
  movieRating: RatingJapanMoviesType;
  tvRating: RatingJapanTelevisionType;
  //#endregion
}