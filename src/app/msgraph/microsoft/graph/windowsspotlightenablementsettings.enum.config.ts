import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsSpotlightEnablementSettings } from './windowsspotlightenablementsettings.enum';
//#endregion

export const WindowsSpotlightEnablementSettingsConfig = {
  name: "windowsSpotlightEnablementSettings",
  members: WindowsSpotlightEnablementSettings
} as EnumTypeConfig<WindowsSpotlightEnablementSettings>;