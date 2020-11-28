import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WifiRadioType } from './wifiradiotype.enum';
//#endregion

export const WifiRadioTypeConfig = {
  name: "wifiRadioType",
  members: WifiRadioType
} as EnumTypeConfig<WifiRadioType>;