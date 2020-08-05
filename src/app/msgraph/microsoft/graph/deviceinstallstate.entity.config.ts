import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceInstallState } from './deviceinstallstate.entity';
//#endregion

export const DeviceInstallStateConfig = {
  name: "deviceInstallState",
  base: "microsoft.graph.entity",
  annotations: [],
  fields: {
    deviceName: {type: 'Edm.String'},
    deviceId: {type: 'Edm.String'},
    lastSyncDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    installState: {type: 'graph.installState', nullable: false},
    errorCode: {type: 'Edm.String'},
    osVersion: {type: 'Edm.String'},
    osDescription: {type: 'Edm.String'},
    userName: {type: 'Edm.String'}
  }
} as EntityConfig<DeviceInstallState>;