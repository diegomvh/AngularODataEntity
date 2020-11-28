import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MediaInfo } from './mediainfo.entity';
import { MediaInfoModel } from './mediainfo.model';
//#endregion

export class MediaInfoCollection<E extends MediaInfo, M extends MediaInfoModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}