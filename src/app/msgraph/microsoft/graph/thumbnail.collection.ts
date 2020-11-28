import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { Thumbnail } from './thumbnail.entity';
import { ThumbnailModel } from './thumbnail.model';
//#endregion

export class ThumbnailCollection<E extends Thumbnail, M extends ThumbnailModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}