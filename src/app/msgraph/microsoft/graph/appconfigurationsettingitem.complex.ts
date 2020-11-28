import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MdmAppConfigKeyType } from './mdmappconfigkeytype.enum';
//#endregion

export interface AppConfigurationSettingItem {
  //#region ODataApi Properties
  appConfigKey: string;
  appConfigKeyType: MdmAppConfigKeyType;
  appConfigKeyValue: string;
  //#endregion
}