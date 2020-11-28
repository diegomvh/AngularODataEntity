import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { EntityCollection } from './entity.collection';
import { Thumbnail } from './thumbnail.entity';
import { ThumbnailSet } from './thumbnailset.entity';
import { ThumbnailModel } from './thumbnail.model';
import { ThumbnailSetModel } from './thumbnailset.model';
import { ThumbnailCollection } from './thumbnail.collection';
//#endregion

export class ThumbnailSetCollection<E extends ThumbnailSet, M extends ThumbnailSetModel<E>> extends EntityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}