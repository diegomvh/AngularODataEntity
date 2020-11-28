import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingCanadaMoviesType } from './ratingcanadamoviestype.enum';
import { RatingCanadaTelevisionType } from './ratingcanadatelevisiontype.enum';
import { MediaContentRatingCanada } from './mediacontentratingcanada.entity';
import { MediaContentRatingCanadaCollection } from './mediacontentratingcanada.collection';
//#endregion

export class MediaContentRatingCanadaModel<E extends MediaContentRatingCanada> extends ODataModel<E> {
  //#region ODataApi Properties
  movieRating: RatingCanadaMoviesType;
  tvRating: RatingCanadaTelevisionType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}