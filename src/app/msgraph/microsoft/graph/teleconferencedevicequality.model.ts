import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { TeleconferenceDeviceMediaQuality } from './teleconferencedevicemediaquality.entity';
import { TeleconferenceDeviceQuality } from './teleconferencedevicequality.entity';
import { TeleconferenceDeviceMediaQualityModel } from './teleconferencedevicemediaquality.model';
import { TeleconferenceDeviceMediaQualityCollection } from './teleconferencedevicemediaquality.collection';
import { TeleconferenceDeviceQualityCollection } from './teleconferencedevicequality.collection';
//#endregion

export class TeleconferenceDeviceQualityModel<E extends TeleconferenceDeviceQuality> extends ODataModel<E> {
  //#region ODataApi Properties
  callChainId: string;
  cloudServiceDeploymentEnvironment?: string;
  cloudServiceDeploymentId?: string;
  cloudServiceInstanceName?: string;
  cloudServiceName?: string;
  deviceDescription: string;
  deviceName: string;
  mediaLegId: string;
  mediaQualityList: TeleconferenceDeviceMediaQualityCollection<TeleconferenceDeviceMediaQuality, TeleconferenceDeviceMediaQualityModel<TeleconferenceDeviceMediaQuality>>;
  participantId: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}