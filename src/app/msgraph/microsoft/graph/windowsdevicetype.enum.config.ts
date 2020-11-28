import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeviceType } from './windowsdevicetype.enum';
//#endregion

export const WindowsDeviceTypeConfig = {
  name: "windowsDeviceType",
  flags: true,
  members: WindowsDeviceType
} as EnumTypeConfig<WindowsDeviceType>;