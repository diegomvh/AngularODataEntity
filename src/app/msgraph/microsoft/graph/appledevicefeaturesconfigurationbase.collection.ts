import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { AppleDeviceFeaturesConfigurationBase } from './appledevicefeaturesconfigurationbase.entity';
import { AppleDeviceFeaturesConfigurationBaseModel } from './appledevicefeaturesconfigurationbase.model';
//#endregion

export class AppleDeviceFeaturesConfigurationBaseCollection<E extends AppleDeviceFeaturesConfigurationBase, M extends AppleDeviceFeaturesConfigurationBaseModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}