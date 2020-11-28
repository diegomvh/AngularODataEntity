import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsStartMenuModeType } from './windowsstartmenumodetype.enum';
//#endregion

export const WindowsStartMenuModeTypeConfig = {
  name: "windowsStartMenuModeType",
  members: WindowsStartMenuModeType
} as EnumTypeConfig<WindowsStartMenuModeType>;