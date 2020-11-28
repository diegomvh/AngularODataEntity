import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceInstallState } from './deviceinstallstate.entity';
import { DeviceInstallStateModel } from './deviceinstallstate.model';
import { DeviceInstallStateCollection } from './deviceinstallstate.collection';
//#endregion

export const DeviceInstallStateConfig = {
  name: "deviceInstallState",
  base: "microsoft.graph.entity",
  model: DeviceInstallStateModel,
  collection: DeviceInstallStateCollection,
  annotations: [],
  fields: {
    deviceId: {type: 'Edm.String'},
    deviceName: {type: 'Edm.String'},
    errorCode: {type: 'Edm.String'},
    installState: {type: 'graph.installState', nullable: false},
    lastSyncDateTime: {type: 'Edm.DateTimeOffset', nullable: false},
    osDescription: {type: 'Edm.String'},
    osVersion: {type: 'Edm.String'},
    userName: {type: 'Edm.String'}
  }
} as StructuredTypeConfig<DeviceInstallState>;