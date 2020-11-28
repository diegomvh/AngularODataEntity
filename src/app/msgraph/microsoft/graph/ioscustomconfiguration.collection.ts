import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { IosCustomConfiguration } from './ioscustomconfiguration.entity';
import { IosCustomConfigurationModel } from './ioscustomconfiguration.model';
//#endregion

export class IosCustomConfigurationCollection<E extends IosCustomConfiguration, M extends IosCustomConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}