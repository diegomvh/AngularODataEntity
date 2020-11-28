import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingIrelandMoviesType } from './ratingirelandmoviestype.enum';
import { RatingIrelandTelevisionType } from './ratingirelandtelevisiontype.enum';
import { MediaContentRatingIreland } from './mediacontentratingireland.entity';
import { MediaContentRatingIrelandCollection } from './mediacontentratingireland.collection';
//#endregion

export class MediaContentRatingIrelandModel<E extends MediaContentRatingIreland> extends ODataModel<E> {
  //#region ODataApi Properties
  movieRating: RatingIrelandMoviesType;
  tvRating: RatingIrelandTelevisionType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}