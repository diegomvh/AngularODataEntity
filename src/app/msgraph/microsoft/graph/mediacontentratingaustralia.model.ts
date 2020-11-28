import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingAustraliaMoviesType } from './ratingaustraliamoviestype.enum';
import { RatingAustraliaTelevisionType } from './ratingaustraliatelevisiontype.enum';
import { MediaContentRatingAustralia } from './mediacontentratingaustralia.complex';
import { MediaContentRatingAustraliaCollection } from './mediacontentratingaustralia.collection';
//#endregion

export class MediaContentRatingAustraliaModel<E extends MediaContentRatingAustralia> extends ODataModel<E> {
  //#region ODataApi Properties
  movieRating: RatingAustraliaMoviesType;
  tvRating: RatingAustraliaTelevisionType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}