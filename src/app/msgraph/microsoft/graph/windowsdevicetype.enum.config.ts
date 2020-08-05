import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeviceType } from './windowsdevicetype.enum';
//#endregion

export const WindowsDeviceTypeConfig = {
  name: "windowsDeviceType",
  flags: true,
  members: WindowsDeviceType
} as EnumConfig<WindowsDeviceType>;