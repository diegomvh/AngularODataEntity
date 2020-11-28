import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingJapanMoviesType } from './ratingjapanmoviestype.enum';
import { RatingJapanTelevisionType } from './ratingjapantelevisiontype.enum';
import { MediaContentRatingJapan } from './mediacontentratingjapan.complex';
import { MediaContentRatingJapanCollection } from './mediacontentratingjapan.collection';
//#endregion

export class MediaContentRatingJapanModel<E extends MediaContentRatingJapan> extends ODataModel<E> {
  //#region ODataApi Properties
  movieRating: RatingJapanMoviesType;
  tvRating: RatingJapanTelevisionType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}