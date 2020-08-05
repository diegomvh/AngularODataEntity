import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceActionResult } from './deviceactionresult.entity';
//#endregion

export const DeviceActionResultConfig = {
  name: "DeviceActionResult",
  annotations: [],
  fields: {
    actionName: {type: 'Edm.String'},
    actionState: {type: 'graph.actionState', nullable: false},
    startDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    lastUpdatedDateTime: {type: 'Edm.DateTimeOffset', nullable: false}
  }
} as EntityConfig<DeviceActionResult>;