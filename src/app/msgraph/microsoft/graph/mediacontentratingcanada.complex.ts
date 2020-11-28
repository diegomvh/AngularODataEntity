import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RatingCanadaMoviesType } from './ratingcanadamoviestype.enum';
import { RatingCanadaTelevisionType } from './ratingcanadatelevisiontype.enum';
//#endregion

export interface MediaContentRatingCanada {
  //#region ODataApi Properties
  movieRating: RatingCanadaMoviesType;
  tvRating: RatingCanadaTelevisionType;
  //#endregion
}