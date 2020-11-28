import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingGermanyMoviesType } from './ratinggermanymoviestype.enum';
import { RatingGermanyTelevisionType } from './ratinggermanytelevisiontype.enum';
import { MediaContentRatingGermany } from './mediacontentratinggermany.complex';
import { MediaContentRatingGermanyModel } from './mediacontentratinggermany.model';
//#endregion

export class MediaContentRatingGermanyCollection<E extends MediaContentRatingGermany, M extends MediaContentRatingGermanyModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}