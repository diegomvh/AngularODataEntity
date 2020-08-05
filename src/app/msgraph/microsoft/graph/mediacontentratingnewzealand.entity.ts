import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RatingNewZealandMoviesType } from './ratingnewzealandmoviestype.enum';
import { RatingNewZealandTelevisionType } from './ratingnewzealandtelevisiontype.enum';
//#endregion

export interface MediaContentRatingNewZealand {
  //#region ODataApi Properties
  movieRating: RatingNewZealandMoviesType;
  tvRating: RatingNewZealandTelevisionType;
  //#endregion
}