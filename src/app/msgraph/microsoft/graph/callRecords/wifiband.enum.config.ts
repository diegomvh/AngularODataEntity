import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WifiBand } from './wifiband.enum';
//#endregion

export const WifiBandConfig = {
  name: "WifiBand",
  members: WifiBand
} as EnumConfig<WifiBand>;