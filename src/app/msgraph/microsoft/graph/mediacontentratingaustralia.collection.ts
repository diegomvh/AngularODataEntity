import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingAustraliaMoviesType } from './ratingaustraliamoviestype.enum';
import { RatingAustraliaTelevisionType } from './ratingaustraliatelevisiontype.enum';
import { MediaContentRatingAustralia } from './mediacontentratingaustralia.entity';
import { MediaContentRatingAustraliaModel } from './mediacontentratingaustralia.model';
//#endregion

export class MediaContentRatingAustraliaCollection<E extends MediaContentRatingAustralia, M extends MediaContentRatingAustraliaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}