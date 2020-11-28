import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingJapanMoviesType } from './ratingjapanmoviestype.enum';
import { RatingJapanTelevisionType } from './ratingjapantelevisiontype.enum';
import { MediaContentRatingJapan } from './mediacontentratingjapan.entity';
import { MediaContentRatingJapanModel } from './mediacontentratingjapan.model';
//#endregion

export class MediaContentRatingJapanCollection<E extends MediaContentRatingJapan, M extends MediaContentRatingJapanModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}