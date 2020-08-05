import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsUpdateType } from './windowsupdatetype.enum';
//#endregion

export const WindowsUpdateTypeConfig = {
  name: "WindowsUpdateType",
  members: WindowsUpdateType
} as EnumConfig<WindowsUpdateType>;