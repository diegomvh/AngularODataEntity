import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { OmaSetting } from './omasetting.complex';
import { Windows10CustomConfiguration } from './windows10customconfiguration.entity';
import { OmaSettingModel } from './omasetting.model';
import { OmaSettingCollection } from './omasetting.collection';
import { Windows10CustomConfigurationCollection } from './windows10customconfiguration.collection';
//#endregion

export class Windows10CustomConfigurationModel<E extends Windows10CustomConfiguration> extends DeviceConfigurationModel<E> {
  //#region ODataApi Properties
  omaSettings?: OmaSettingCollection<OmaSetting, OmaSettingModel<OmaSetting>>;
  //#endregion
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}