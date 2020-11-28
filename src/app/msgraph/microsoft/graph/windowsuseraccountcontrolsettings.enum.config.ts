import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsUserAccountControlSettings } from './windowsuseraccountcontrolsettings.enum';
//#endregion

export const WindowsUserAccountControlSettingsConfig = {
  name: "windowsUserAccountControlSettings",
  members: WindowsUserAccountControlSettings
} as EnumTypeConfig<WindowsUserAccountControlSettings>;