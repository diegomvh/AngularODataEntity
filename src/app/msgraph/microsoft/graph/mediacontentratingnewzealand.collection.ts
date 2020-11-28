import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingNewZealandMoviesType } from './ratingnewzealandmoviestype.enum';
import { RatingNewZealandTelevisionType } from './ratingnewzealandtelevisiontype.enum';
import { MediaContentRatingNewZealand } from './mediacontentratingnewzealand.complex';
import { MediaContentRatingNewZealandModel } from './mediacontentratingnewzealand.model';
//#endregion

export class MediaContentRatingNewZealandCollection<E extends MediaContentRatingNewZealand, M extends MediaContentRatingNewZealandModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}