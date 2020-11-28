import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { OmaSetting } from './omasetting.entity';
import { AndroidCustomConfiguration } from './androidcustomconfiguration.entity';
import { OmaSettingModel } from './omasetting.model';
import { AndroidCustomConfigurationModel } from './androidcustomconfiguration.model';
import { OmaSettingCollection } from './omasetting.collection';
//#endregion

export class AndroidCustomConfigurationCollection<E extends AndroidCustomConfiguration, M extends AndroidCustomConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}