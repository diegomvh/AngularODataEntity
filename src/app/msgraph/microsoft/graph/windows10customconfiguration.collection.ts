import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { OmaSetting } from './omasetting.entity';
import { Windows10CustomConfiguration } from './windows10customconfiguration.entity';
import { OmaSettingModel } from './omasetting.model';
import { Windows10CustomConfigurationModel } from './windows10customconfiguration.model';
import { OmaSettingCollection } from './omasetting.collection';
//#endregion

export class Windows10CustomConfigurationCollection<E extends Windows10CustomConfiguration, M extends Windows10CustomConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}