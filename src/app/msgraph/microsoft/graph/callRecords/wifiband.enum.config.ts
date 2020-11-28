import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WifiBand } from './wifiband.enum';
//#endregion

export const WifiBandConfig = {
  name: "wifiBand",
  members: WifiBand
} as EnumTypeConfig<WifiBand>;