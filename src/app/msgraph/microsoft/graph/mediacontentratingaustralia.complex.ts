import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { RatingAustraliaMoviesType } from './ratingaustraliamoviestype.enum';
import { RatingAustraliaTelevisionType } from './ratingaustraliatelevisiontype.enum';
//#endregion

export interface MediaContentRatingAustralia {
  //#region ODataApi Properties
  movieRating: RatingAustraliaMoviesType;
  tvRating: RatingAustraliaTelevisionType;
  //#endregion
}