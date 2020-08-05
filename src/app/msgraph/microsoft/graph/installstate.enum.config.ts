import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { InstallState } from './installstate.enum';
//#endregion

export const InstallStateConfig = {
  name: "InstallState",
  members: InstallState
} as EnumConfig<InstallState>;