import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDefenderScanActionResult } from './windowsdefenderscanactionresult.entity';
//#endregion

export const WindowsDefenderScanActionResultConfig = {
  name: "WindowsDefenderScanActionResult",
  base: "microsoft.graph.deviceActionResult",
  annotations: [],
  fields: {
    scanType: {type: 'Edm.String'}
  }
} as EntityConfig<WindowsDefenderScanActionResult>;