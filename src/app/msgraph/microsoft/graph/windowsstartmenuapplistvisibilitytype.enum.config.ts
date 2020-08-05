import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsStartMenuAppListVisibilityType } from './windowsstartmenuapplistvisibilitytype.enum';
//#endregion

export const WindowsStartMenuAppListVisibilityTypeConfig = {
  name: "WindowsStartMenuAppListVisibilityType",
  flags: true,
  members: WindowsStartMenuAppListVisibilityType
} as EnumConfig<WindowsStartMenuAppListVisibilityType>;