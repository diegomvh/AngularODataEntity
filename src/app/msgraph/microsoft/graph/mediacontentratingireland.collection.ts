import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingIrelandMoviesType } from './ratingirelandmoviestype.enum';
import { RatingIrelandTelevisionType } from './ratingirelandtelevisiontype.enum';
import { MediaContentRatingIreland } from './mediacontentratingireland.entity';
import { MediaContentRatingIrelandModel } from './mediacontentratingireland.model';
//#endregion

export class MediaContentRatingIrelandCollection<E extends MediaContentRatingIreland, M extends MediaContentRatingIrelandModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}