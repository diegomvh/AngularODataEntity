import { EnumTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsHelloForBusinessPinUsage } from './windowshelloforbusinesspinusage.enum';
//#endregion

export const WindowsHelloForBusinessPinUsageConfig = {
  name: "windowsHelloForBusinessPinUsage",
  members: WindowsHelloForBusinessPinUsage
} as EnumTypeConfig<WindowsHelloForBusinessPinUsage>;