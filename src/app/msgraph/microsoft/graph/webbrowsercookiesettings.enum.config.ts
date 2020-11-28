import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WebBrowserCookieSettings } from './webbrowsercookiesettings.enum';
//#endregion

export const WebBrowserCookieSettingsConfig = {
  name: "webBrowserCookieSettings",
  members: WebBrowserCookieSettings
} as EnumTypeConfig<WebBrowserCookieSettings>;