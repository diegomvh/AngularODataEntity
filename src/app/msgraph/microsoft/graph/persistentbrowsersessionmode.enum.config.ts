import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { PersistentBrowserSessionMode } from './persistentbrowsersessionmode.enum';
//#endregion

export const PersistentBrowserSessionModeConfig = {
  name: "persistentBrowserSessionMode",
  members: PersistentBrowserSessionMode
} as EnumConfig<PersistentBrowserSessionMode>;