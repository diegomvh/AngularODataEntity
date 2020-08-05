import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RatingGermanyMoviesType } from './ratinggermanymoviestype.enum';
import { RatingGermanyTelevisionType } from './ratinggermanytelevisiontype.enum';
//#endregion

export interface MediaContentRatingGermany {
  //#region ODataApi Properties
  movieRating: RatingGermanyMoviesType;
  tvRating: RatingGermanyTelevisionType;
  //#endregion
}