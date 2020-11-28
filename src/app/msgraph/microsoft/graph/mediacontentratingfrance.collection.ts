import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingFranceMoviesType } from './ratingfrancemoviestype.enum';
import { RatingFranceTelevisionType } from './ratingfrancetelevisiontype.enum';
import { MediaContentRatingFrance } from './mediacontentratingfrance.complex';
import { MediaContentRatingFranceModel } from './mediacontentratingfrance.model';
//#endregion

export class MediaContentRatingFranceCollection<E extends MediaContentRatingFrance, M extends MediaContentRatingFranceModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}