import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { OmaSetting } from './omasetting.entity';
import { AndroidCustomConfiguration } from './androidcustomconfiguration.entity';
import { OmaSettingModel } from './omasetting.model';
import { OmaSettingCollection } from './omasetting.collection';
import { AndroidCustomConfigurationCollection } from './androidcustomconfiguration.collection';
//#endregion

export class AndroidCustomConfigurationModel<E extends AndroidCustomConfiguration> extends DeviceConfigurationModel<E> {
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