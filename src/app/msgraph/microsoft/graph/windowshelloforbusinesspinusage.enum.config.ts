import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsHelloForBusinessPinUsage } from './windowshelloforbusinesspinusage.enum';
//#endregion

export const WindowsHelloForBusinessPinUsageConfig = {
  name: "WindowsHelloForBusinessPinUsage",
  members: WindowsHelloForBusinessPinUsage
} as EnumConfig<WindowsHelloForBusinessPinUsage>;