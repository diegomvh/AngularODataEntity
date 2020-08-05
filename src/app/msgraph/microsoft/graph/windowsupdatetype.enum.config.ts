import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsUpdateType } from './windowsupdatetype.enum';
//#endregion

export const WindowsUpdateTypeConfig = {
  name: "windowsUpdateType",
  members: WindowsUpdateType
} as EnumConfig<WindowsUpdateType>;