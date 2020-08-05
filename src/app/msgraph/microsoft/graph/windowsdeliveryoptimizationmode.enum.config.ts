import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeliveryOptimizationMode } from './windowsdeliveryoptimizationmode.enum';
//#endregion

export const WindowsDeliveryOptimizationModeConfig = {
  name: "WindowsDeliveryOptimizationMode",
  members: WindowsDeliveryOptimizationMode
} as EnumConfig<WindowsDeliveryOptimizationMode>;