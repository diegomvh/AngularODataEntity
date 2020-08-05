import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WebBrowserCookieSettings } from './webbrowsercookiesettings.enum';
//#endregion

export const WebBrowserCookieSettingsConfig = {
  name: "WebBrowserCookieSettings",
  members: WebBrowserCookieSettings
} as EnumConfig<WebBrowserCookieSettings>;