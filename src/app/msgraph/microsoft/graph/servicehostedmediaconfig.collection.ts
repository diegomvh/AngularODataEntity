import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MediaConfigCollection } from './mediaconfig.collection';
import { MediaInfo } from './mediainfo.entity';
import { ServiceHostedMediaConfig } from './servicehostedmediaconfig.entity';
import { MediaInfoModel } from './mediainfo.model';
import { ServiceHostedMediaConfigModel } from './servicehostedmediaconfig.model';
import { MediaInfoCollection } from './mediainfo.collection';
//#endregion

export class ServiceHostedMediaConfigCollection<E extends ServiceHostedMediaConfig, M extends ServiceHostedMediaConfigModel<E>> extends MediaConfigCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}