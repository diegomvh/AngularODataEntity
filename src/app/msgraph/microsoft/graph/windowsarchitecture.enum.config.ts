import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsArchitecture } from './windowsarchitecture.enum';
//#endregion

export const WindowsArchitectureConfig = {
  name: "windowsArchitecture",
  flags: true,
  members: WindowsArchitecture
} as EnumTypeConfig<WindowsArchitecture>;