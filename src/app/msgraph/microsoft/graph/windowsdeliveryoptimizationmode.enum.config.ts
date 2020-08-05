import { EnumConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDeliveryOptimizationMode } from './windowsdeliveryoptimizationmode.enum';
//#endregion

export const WindowsDeliveryOptimizationModeConfig = {
  name: "windowsDeliveryOptimizationMode",
  members: WindowsDeliveryOptimizationMode
} as EnumConfig<WindowsDeliveryOptimizationMode>;