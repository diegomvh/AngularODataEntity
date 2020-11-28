import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { LocateDeviceActionResult } from './locatedeviceactionresult.entity';
import { LocateDeviceActionResultModel } from './locatedeviceactionresult.model';
import { LocateDeviceActionResultCollection } from './locatedeviceactionresult.collection';
//#endregion

export const LocateDeviceActionResultConfig = {
  name: "locateDeviceActionResult",
  base: "microsoft.graph.deviceActionResult",
  model: LocateDeviceActionResultModel,
  collection: LocateDeviceActionResultCollection,
  annotations: [],
  fields: {
    deviceLocation: {type: 'graph.deviceGeoLocation'}
  }
} as EntityConfig<LocateDeviceActionResult>;