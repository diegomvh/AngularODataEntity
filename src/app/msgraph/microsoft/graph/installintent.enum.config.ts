import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { InstallIntent } from './installintent.enum';
//#endregion

export const InstallIntentConfig = {
  name: "InstallIntent",
  members: InstallIntent
} as EnumConfig<InstallIntent>;