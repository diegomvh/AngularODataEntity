import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDefenderScanActionResult } from './windowsdefenderscanactionresult.entity';
//#endregion

export const WindowsDefenderScanActionResultConfig = {
  name: "windowsDefenderScanActionResult",
  base: "microsoft.graph.deviceActionResult",
  annotations: [],
  fields: {
    scanType: {type: 'Edm.String'}
  }
} as EntityConfig<WindowsDefenderScanActionResult>;