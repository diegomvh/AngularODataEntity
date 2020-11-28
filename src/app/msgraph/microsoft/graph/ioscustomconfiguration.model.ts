import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { IosCustomConfiguration } from './ioscustomconfiguration.entity';
import { IosCustomConfigurationCollection } from './ioscustomconfiguration.collection';
//#endregion

export class IosCustomConfigurationModel<E extends IosCustomConfiguration> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  payload: ArrayBuffer;
  payloadFileName?: string;
  payloadName: string;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}