import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingCanadaMoviesType } from './ratingcanadamoviestype.enum';
import { RatingCanadaTelevisionType } from './ratingcanadatelevisiontype.enum';
import { MediaContentRatingCanada } from './mediacontentratingcanada.complex';
import { MediaContentRatingCanadaModel } from './mediacontentratingcanada.model';
//#endregion

export class MediaContentRatingCanadaCollection<E extends MediaContentRatingCanada, M extends MediaContentRatingCanadaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}