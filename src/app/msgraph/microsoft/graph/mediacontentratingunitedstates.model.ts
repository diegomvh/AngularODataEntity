import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingUnitedStatesMoviesType } from './ratingunitedstatesmoviestype.enum';
import { RatingUnitedStatesTelevisionType } from './ratingunitedstatestelevisiontype.enum';
import { MediaContentRatingUnitedStates } from './mediacontentratingunitedstates.entity';
import { MediaContentRatingUnitedStatesCollection } from './mediacontentratingunitedstates.collection';
//#endregion

export class MediaContentRatingUnitedStatesModel<E extends MediaContentRatingUnitedStates> extends ODataModel<E> {
  //#region ODataApi Properties
  movieRating: RatingUnitedStatesMoviesType;
  tvRating: RatingUnitedStatesTelevisionType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}