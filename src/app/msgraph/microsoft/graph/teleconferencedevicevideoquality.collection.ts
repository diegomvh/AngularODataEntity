import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeleconferenceDeviceMediaQualityCollection } from './teleconferencedevicemediaquality.collection';
import { TeleconferenceDeviceVideoQuality } from './teleconferencedevicevideoquality.complex';
import { TeleconferenceDeviceVideoQualityModel } from './teleconferencedevicevideoquality.model';
//#endregion

export class TeleconferenceDeviceVideoQualityCollection<E extends TeleconferenceDeviceVideoQuality, M extends TeleconferenceDeviceVideoQualityModel<E>> extends TeleconferenceDeviceMediaQualityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}