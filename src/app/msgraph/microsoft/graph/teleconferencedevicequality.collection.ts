import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeleconferenceDeviceMediaQuality } from './teleconferencedevicemediaquality.entity';
import { TeleconferenceDeviceQuality } from './teleconferencedevicequality.entity';
import { TeleconferenceDeviceMediaQualityModel } from './teleconferencedevicemediaquality.model';
import { TeleconferenceDeviceQualityModel } from './teleconferencedevicequality.model';
import { TeleconferenceDeviceMediaQualityCollection } from './teleconferencedevicemediaquality.collection';
//#endregion

export class TeleconferenceDeviceQualityCollection<E extends TeleconferenceDeviceQuality, M extends TeleconferenceDeviceQualityModel<E>> extends ODataCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}