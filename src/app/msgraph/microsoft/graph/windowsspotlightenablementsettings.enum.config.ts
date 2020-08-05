import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsSpotlightEnablementSettings } from './windowsspotlightenablementsettings.enum';
//#endregion

export const WindowsSpotlightEnablementSettingsConfig = {
  name: "WindowsSpotlightEnablementSettings",
  members: WindowsSpotlightEnablementSettings
} as EnumConfig<WindowsSpotlightEnablementSettings>;