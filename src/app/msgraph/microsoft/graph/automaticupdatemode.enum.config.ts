import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { AutomaticUpdateMode } from './automaticupdatemode.enum';
//#endregion

export const AutomaticUpdateModeConfig = {
  name: "automaticUpdateMode",
  members: AutomaticUpdateMode
} as EnumTypeConfig<AutomaticUpdateMode>;