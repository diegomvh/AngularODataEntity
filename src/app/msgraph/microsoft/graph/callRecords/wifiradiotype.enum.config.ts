import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WifiRadioType } from './wifiradiotype.enum';
//#endregion

export const WifiRadioTypeConfig = {
  name: "WifiRadioType",
  members: WifiRadioType
} as EnumConfig<WifiRadioType>;