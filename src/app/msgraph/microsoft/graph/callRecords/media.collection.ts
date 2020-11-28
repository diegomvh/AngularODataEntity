import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceInfo } from './deviceinfo.complex';
import { Media } from './media.complex';
import { NetworkInfo } from './networkinfo.complex';
import { MediaStream } from './mediastream.complex';
import { DeviceInfoModel } from './deviceinfo.model';
import { MediaModel } from './media.model';
import { NetworkInfoModel } from './networkinfo.model';
import { MediaStreamModel } from './mediastream.model';
import { DeviceInfoCollection } from './deviceinfo.collection';
import { NetworkInfoCollection } from './networkinfo.collection';
import { MediaStreamCollection } from './mediastream.collection';
//#endregion

export class MediaCollection<E extends Media, M extends MediaModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}