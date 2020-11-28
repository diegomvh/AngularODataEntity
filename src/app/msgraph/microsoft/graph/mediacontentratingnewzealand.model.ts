import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingNewZealandMoviesType } from './ratingnewzealandmoviestype.enum';
import { RatingNewZealandTelevisionType } from './ratingnewzealandtelevisiontype.enum';
import { MediaContentRatingNewZealand } from './mediacontentratingnewzealand.entity';
import { MediaContentRatingNewZealandCollection } from './mediacontentratingnewzealand.collection';
//#endregion

export class MediaContentRatingNewZealandModel<E extends MediaContentRatingNewZealand> extends ODataModel<E> {
  //#region ODataApi Properties
  movieRating: RatingNewZealandMoviesType;
  tvRating: RatingNewZealandTelevisionType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}