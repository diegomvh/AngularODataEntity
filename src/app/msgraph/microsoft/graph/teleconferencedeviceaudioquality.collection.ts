import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeleconferenceDeviceMediaQualityCollection } from './teleconferencedevicemediaquality.collection';
import { TeleconferenceDeviceAudioQuality } from './teleconferencedeviceaudioquality.complex';
import { TeleconferenceDeviceAudioQualityModel } from './teleconferencedeviceaudioquality.model';
//#endregion

export class TeleconferenceDeviceAudioQualityCollection<E extends TeleconferenceDeviceAudioQuality, M extends TeleconferenceDeviceAudioQualityModel<E>> extends TeleconferenceDeviceMediaQualityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}