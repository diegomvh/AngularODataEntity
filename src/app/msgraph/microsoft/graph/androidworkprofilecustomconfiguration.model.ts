import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { OmaSetting } from './omasetting.complex';
import { AndroidWorkProfileCustomConfiguration } from './androidworkprofilecustomconfiguration.entity';
import { OmaSettingModel } from './omasetting.model';
import { OmaSettingCollection } from './omasetting.collection';
import { AndroidWorkProfileCustomConfigurationCollection } from './androidworkprofilecustomconfiguration.collection';
//#endregion

export class AndroidWorkProfileCustomConfigurationModel<E extends AndroidWorkProfileCustomConfiguration> extends DeviceConfigurationModel<E> {
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