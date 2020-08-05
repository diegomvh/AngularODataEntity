import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsHelloForBusinessPinUsage } from './windowshelloforbusinesspinusage.enum';
//#endregion

export const WindowsHelloForBusinessPinUsageConfig = {
  name: "windowsHelloForBusinessPinUsage",
  members: WindowsHelloForBusinessPinUsage
} as EnumConfig<WindowsHelloForBusinessPinUsage>;