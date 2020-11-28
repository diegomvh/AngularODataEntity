import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityModel } from './entity.model';
import { Thumbnail } from './thumbnail.entity';
import { ThumbnailSet } from './thumbnailset.entity';
import { ThumbnailModel } from './thumbnail.model';
import { ThumbnailCollection } from './thumbnail.collection';
import { ThumbnailSetCollection } from './thumbnailset.collection';
//#endregion

export class ThumbnailSetModel<E extends ThumbnailSet> extends EntityModel<E> {
  //#region ODataApi Properties
  large?: ThumbnailModel<Thumbnail>;
  medium?: ThumbnailModel<Thumbnail>;
  small?: ThumbnailModel<Thumbnail>;
  source?: ThumbnailModel<Thumbnail>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}