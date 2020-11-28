import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingGermanyMoviesType } from './ratinggermanymoviestype.enum';
import { RatingGermanyTelevisionType } from './ratinggermanytelevisiontype.enum';
import { MediaContentRatingGermany } from './mediacontentratinggermany.complex';
import { MediaContentRatingGermanyCollection } from './mediacontentratinggermany.collection';
//#endregion

export class MediaContentRatingGermanyModel<E extends MediaContentRatingGermany> extends ODataModel<E> {
  //#region ODataApi Properties
  movieRating: RatingGermanyMoviesType;
  tvRating: RatingGermanyTelevisionType;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}