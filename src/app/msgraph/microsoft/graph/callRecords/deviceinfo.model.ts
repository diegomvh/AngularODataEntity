import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceInfo } from './deviceinfo.entity';
import { DeviceInfoCollection } from './deviceinfo.collection';
//#endregion

export class DeviceInfoModel<E extends DeviceInfo> extends ODataModel<E> {
  //#region ODataApi Properties
  captureDeviceDriver?: string;
  captureDeviceName?: string;
  captureNotFunctioningEventRatio?: number;
  cpuInsufficentEventRatio?: number;
  deviceClippingEventRatio?: number;
  deviceGlitchEventRatio?: number;
  howlingEventCount?: number;
  initialSignalLevelRootMeanSquare?: number;
  lowSpeechLevelEventRatio?: number;
  lowSpeechToNoiseEventRatio?: number;
  micGlitchRate?: number;
  receivedNoiseLevel?: number;
  receivedSignalLevel?: number;
  renderDeviceDriver?: string;
  renderDeviceName?: string;
  renderMuteEventRatio?: number;
  renderNotFunctioningEventRatio?: number;
  renderZeroVolumeEventRatio?: number;
  sentNoiseLevel?: number;
  sentSignalLevel?: number;
  speakerGlitchRate?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}