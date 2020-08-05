﻿import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { AutomaticUpdateMode } from './automaticupdatemode.enum';
//#endregion

export const AutomaticUpdateModeConfig = {
  name: "automaticUpdateMode",
  members: AutomaticUpdateMode
} as EnumConfig<AutomaticUpdateMode>;