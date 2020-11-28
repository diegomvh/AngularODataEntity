import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MediaInfo } from './mediainfo.complex';
import { MediaInfoCollection } from './mediainfo.collection';
//#endregion

export class MediaInfoModel<E extends MediaInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  resourceId?: string;
  uri: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}