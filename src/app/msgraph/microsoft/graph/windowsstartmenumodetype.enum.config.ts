import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsStartMenuModeType } from './windowsstartmenumodetype.enum';
//#endregion

export const WindowsStartMenuModeTypeConfig = {
  name: "WindowsStartMenuModeType",
  members: WindowsStartMenuModeType
} as EnumConfig<WindowsStartMenuModeType>;