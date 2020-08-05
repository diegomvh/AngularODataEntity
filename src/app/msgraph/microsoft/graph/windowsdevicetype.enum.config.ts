import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeviceType } from './windowsdevicetype.enum';
//#endregion

export const WindowsDeviceTypeConfig = {
  name: "WindowsDeviceType",
  flags: true,
  members: WindowsDeviceType
} as EnumConfig<WindowsDeviceType>;