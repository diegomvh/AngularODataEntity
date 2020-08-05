import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LocateDeviceActionResult } from './locatedeviceactionresult.entity';
//#endregion

export const LocateDeviceActionResultConfig = {
  name: "locateDeviceActionResult",
  base: "microsoft.graph.deviceActionResult",
  annotations: [],
  fields: {
    deviceLocation: {type: 'graph.deviceGeoLocation'}
  }
} as EntityConfig<LocateDeviceActionResult>;