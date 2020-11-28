import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingUnitedStatesMoviesType } from './ratingunitedstatesmoviestype.enum';
import { RatingUnitedStatesTelevisionType } from './ratingunitedstatestelevisiontype.enum';
import { MediaContentRatingUnitedStates } from './mediacontentratingunitedstates.complex';
import { MediaContentRatingUnitedStatesModel } from './mediacontentratingunitedstates.model';
//#endregion

export class MediaContentRatingUnitedStatesCollection<E extends MediaContentRatingUnitedStates, M extends MediaContentRatingUnitedStatesModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}