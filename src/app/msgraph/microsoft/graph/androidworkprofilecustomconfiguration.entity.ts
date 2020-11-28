import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { DeviceConfiguration } from './deviceconfiguration.entity';
import { OmaSetting } from './omasetting.complex';
import { OmaSettingModel } from './omasetting.model';
import { DeviceConfigurationModel } from './deviceconfiguration.model';
import { OmaSettingCollection } from './omasetting.collection';
import { DeviceConfigurationCollection } from './deviceconfiguration.collection';
//#endregion

export interface AndroidWorkProfileCustomConfiguration extends DeviceConfiguration {
  //#region ODataApi Properties
  omaSettings?: OmaSetting[];
  //#endregion
}