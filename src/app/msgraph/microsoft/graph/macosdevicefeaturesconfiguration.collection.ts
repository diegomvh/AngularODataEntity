import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { AppleDeviceFeaturesConfigurationBaseCollection } from './appledevicefeaturesconfigurationbase.collection';
import { MacOSDeviceFeaturesConfiguration } from './macosdevicefeaturesconfiguration.entity';
import { MacOSDeviceFeaturesConfigurationModel } from './macosdevicefeaturesconfiguration.model';
//#endregion

export class MacOSDeviceFeaturesConfigurationCollection<E extends MacOSDeviceFeaturesConfiguration, M extends MacOSDeviceFeaturesConfigurationModel<E>> extends AppleDeviceFeaturesConfigurationBaseCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}