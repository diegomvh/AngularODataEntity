import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { InstallIntent } from './installintent.enum';
//#endregion

export const InstallIntentConfig = {
  name: "installIntent",
  members: InstallIntent
} as EnumConfig<InstallIntent>;