import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { InstallState } from './installstate.enum';
//#endregion

export const InstallStateConfig = {
  name: "installState",
  members: InstallState
} as EnumConfig<InstallState>;