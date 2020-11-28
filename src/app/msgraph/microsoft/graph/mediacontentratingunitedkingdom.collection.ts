import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { RatingUnitedKingdomMoviesType } from './ratingunitedkingdommoviestype.enum';
import { RatingUnitedKingdomTelevisionType } from './ratingunitedkingdomtelevisiontype.enum';
import { MediaContentRatingUnitedKingdom } from './mediacontentratingunitedkingdom.entity';
import { MediaContentRatingUnitedKingdomModel } from './mediacontentratingunitedkingdom.model';
//#endregion

export class MediaContentRatingUnitedKingdomCollection<E extends MediaContentRatingUnitedKingdom, M extends MediaContentRatingUnitedKingdomModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}