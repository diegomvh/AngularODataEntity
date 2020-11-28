import { ODataModel, ODataCollection, HttpOptions } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
import { OmaSetting } from './omasetting.complex';
import { AndroidWorkProfileCustomConfiguration } from './androidworkprofilecustomconfiguration.entity';
import { OmaSettingModel } from './omasetting.model';
import { AndroidWorkProfileCustomConfigurationModel } from './androidworkprofilecustomconfiguration.model';
import { OmaSettingCollection } from './omasetting.collection';
//#endregion

export class AndroidWorkProfileCustomConfigurationCollection<E extends AndroidWorkProfileCustomConfiguration, M extends AndroidWorkProfileCustomConfigurationModel<E>> extends DeviceConfigurationCollection<E, M> {
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
}