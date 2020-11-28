import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeleconferenceDeviceVideoQualityCollection } from './teleconferencedevicevideoquality.collection';
import { TeleconferenceDeviceScreenSharingQuality } from './teleconferencedevicescreensharingquality.entity';
import { TeleconferenceDeviceScreenSharingQualityModel } from './teleconferencedevicescreensharingquality.model';
//#endregion

export class TeleconferenceDeviceScreenSharingQualityCollection<E extends TeleconferenceDeviceScreenSharingQuality, M extends TeleconferenceDeviceScreenSharingQualityModel<E>> extends TeleconferenceDeviceVideoQualityCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}