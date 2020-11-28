import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceActionResult } from './deviceactionresult.entity';
import { DeviceActionResultModel } from './deviceactionresult.model';
import { DeviceActionResultCollection } from './deviceactionresult.collection';
//#endregion

export const DeviceActionResultConfig = {
  name: "deviceActionResult",
  model: DeviceActionResultModel,
  collection: DeviceActionResultCollection,
  annotations: [],
  fields: {
    actionName: {type: 'Edm.String'},
    actionState: {type: 'graph.actionState', nullable: false},
    lastUpdatedDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    startDateTime: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as EntityConfig<DeviceActionResult>;