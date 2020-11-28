import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingUnitedKingdomMoviesType } from './ratingunitedkingdommoviestype.enum';
import { RatingUnitedKingdomTelevisionType } from './ratingunitedkingdomtelevisiontype.enum';
import { MediaContentRatingUnitedKingdom } from './mediacontentratingunitedkingdom.entity';
import { MediaContentRatingUnitedKingdomCollection } from './mediacontentratingunitedkingdom.collection';
//#endregion

export class MediaContentRatingUnitedKingdomModel<E extends MediaContentRatingUnitedKingdom> extends ODataModel<E> {
  //#region ODataApi Properties
  movieRating: RatingUnitedKingdomMoviesType;
  tvRating: RatingUnitedKingdomTelevisionType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}