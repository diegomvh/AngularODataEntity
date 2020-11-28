import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsStartMenuAppListVisibilityType } from './windowsstartmenuapplistvisibilitytype.enum';
//#endregion

export const WindowsStartMenuAppListVisibilityTypeConfig = {
  name: "windowsStartMenuAppListVisibilityType",
  flags: true,
  members: WindowsStartMenuAppListVisibilityType
} as EnumTypeConfig<WindowsStartMenuAppListVisibilityType>;