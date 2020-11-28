import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { MacOSCustomConfiguration } from './macoscustomconfiguration.entity';
import { MacOSCustomConfigurationModel } from './macoscustomconfiguration.model';
//#endregion

export class MacOSCustomConfigurationCollection<E extends MacOSCustomConfiguration, M extends MacOSCustomConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}