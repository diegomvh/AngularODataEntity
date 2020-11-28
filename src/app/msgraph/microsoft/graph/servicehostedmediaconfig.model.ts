import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MediaConfigModel } from './mediaconfig.model';
import { MediaInfo } from './mediainfo.complex';
import { ServiceHostedMediaConfig } from './servicehostedmediaconfig.complex';
import { MediaInfoModel } from './mediainfo.model';
import { MediaInfoCollection } from './mediainfo.collection';
import { ServiceHostedMediaConfigCollection } from './servicehostedmediaconfig.collection';
//#endregion

export class ServiceHostedMediaConfigModel<E extends ServiceHostedMediaConfig> extends MediaConfigModel<E> {
  //#region ODataApi Properties
  preFetchMedia?: MediaInfoCollection<MediaInfo, MediaInfoModel<MediaInfo>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}