import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { WindowsDefenderScanActionResult } from './windowsdefenderscanactionresult.complex';
import { WindowsDefenderScanActionResultModel } from './windowsdefenderscanactionresult.model';
import { WindowsDefenderScanActionResultCollection } from './windowsdefenderscanactionresult.collection';
//#endregion

export const WindowsDefenderScanActionResultConfig = {
  name: "windowsDefenderScanActionResult",
  base: "microsoft.graph.deviceActionResult",
  model: WindowsDefenderScanActionResultModel,
  collection: WindowsDefenderScanActionResultCollection,
  annotations: [],
  fields: {
    scanType: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<WindowsDefenderScanActionResult>;