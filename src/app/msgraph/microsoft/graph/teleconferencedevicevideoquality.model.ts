import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeleconferenceDeviceMediaQualityModel } from './teleconferencedevicemediaquality.model';
import { TeleconferenceDeviceVideoQuality } from './teleconferencedevicevideoquality.entity';
import { TeleconferenceDeviceVideoQualityCollection } from './teleconferencedevicevideoquality.collection';
//#endregion

export class TeleconferenceDeviceVideoQualityModel<E extends TeleconferenceDeviceVideoQuality> extends TeleconferenceDeviceMediaQualityModel<E> {
  //#region ODataApi Properties
  averageInboundBitRate?: number;
  averageInboundFrameRate?: number;
  averageOutboundBitRate?: number;
  averageOutboundFrameRate?: number;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}