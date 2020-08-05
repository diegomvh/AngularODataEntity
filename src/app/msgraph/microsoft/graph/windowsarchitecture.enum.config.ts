import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsArchitecture } from './windowsarchitecture.enum';
//#endregion

export const WindowsArchitectureConfig = {
  name: "WindowsArchitecture",
  flags: true,
  members: WindowsArchitecture
} as EnumConfig<WindowsArchitecture>;