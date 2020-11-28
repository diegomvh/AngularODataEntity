import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingFranceMoviesType } from './ratingfrancemoviestype.enum';
import { RatingFranceTelevisionType } from './ratingfrancetelevisiontype.enum';
import { MediaContentRatingFrance } from './mediacontentratingfrance.entity';
import { MediaContentRatingFranceCollection } from './mediacontentratingfrance.collection';
//#endregion

export class MediaContentRatingFranceModel<E extends MediaContentRatingFrance> extends ODataModel<E> {
  //#region ODataApi Properties
  movieRating: RatingFranceMoviesType;
  tvRating: RatingFranceTelevisionType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}