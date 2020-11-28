import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { AppleDeviceFeaturesConfigurationBase } from './appledevicefeaturesconfigurationbase.entity';
import { AppleDeviceFeaturesConfigurationBaseCollection } from './appledevicefeaturesconfigurationbase.collection';
//#endregion

export class AppleDeviceFeaturesConfigurationBaseModel<E extends AppleDeviceFeaturesConfigurationBase> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}