import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeleconferenceDeviceVideoQualityModel } from './teleconferencedevicevideoquality.model';
import { TeleconferenceDeviceScreenSharingQuality } from './teleconferencedevicescreensharingquality.complex';
import { TeleconferenceDeviceScreenSharingQualityCollection } from './teleconferencedevicescreensharingquality.collection';
//#endregion

export class TeleconferenceDeviceScreenSharingQualityModel<E extends TeleconferenceDeviceScreenSharingQuality> extends TeleconferenceDeviceVideoQualityModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}