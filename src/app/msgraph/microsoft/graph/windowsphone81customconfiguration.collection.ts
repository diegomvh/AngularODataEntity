import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { OmaSetting } from './omasetting.complex';
import { WindowsPhone81CustomConfiguration } from './windowsphone81customconfiguration.entity';
import { OmaSettingModel } from './omasetting.model';
import { WindowsPhone81CustomConfigurationModel } from './windowsphone81customconfiguration.model';
import { OmaSettingCollection } from './omasetting.collection';
//#endregion

export class WindowsPhone81CustomConfigurationCollection<E extends WindowsPhone81CustomConfiguration, M extends WindowsPhone81CustomConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}