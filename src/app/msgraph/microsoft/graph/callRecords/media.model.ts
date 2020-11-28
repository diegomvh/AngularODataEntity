import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceInfo } from './deviceinfo.complex';
import { Media } from './media.complex';
import { NetworkInfo } from './networkinfo.complex';
import { MediaStream } from './mediastream.complex';
import { DeviceInfoModel } from './deviceinfo.model';
import { NetworkInfoModel } from './networkinfo.model';
import { MediaStreamModel } from './mediastream.model';
import { DeviceInfoCollection } from './deviceinfo.collection';
import { MediaCollection } from './media.collection';
import { NetworkInfoCollection } from './networkinfo.collection';
import { MediaStreamCollection } from './mediastream.collection';
//#endregion

export class MediaModel<E extends Media> extends ODataModel<E> {
  //#region ODataApi Properties
  calleeDevice?: DeviceInfoModel<DeviceInfo>;
  calleeNetwork?: NetworkInfoModel<NetworkInfo>;
  callerDevice?: DeviceInfoModel<DeviceInfo>;
  callerNetwork?: NetworkInfoModel<NetworkInfo>;
  label?: string;
  streams?: MediaStreamCollection<MediaStream, MediaStreamModel<MediaStream>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}