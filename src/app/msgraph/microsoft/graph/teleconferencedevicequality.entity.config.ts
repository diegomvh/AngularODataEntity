import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeleconferenceDeviceQuality } from './teleconferencedevicequality.entity';
//#endregion

export const TeleconferenceDeviceQualityConfig = {
  name: "teleconferenceDeviceQuality",
  open: true,
  annotations: [],
  fields: {
    callChainId: {type: 'Edm.Guid', nullable: false},
    participantId: {type: 'Edm.Guid', nullable: false},
    mediaLegId: {type: 'Edm.Guid', nullable: false},
    deviceName: {type: 'Edm.String', nullable: false},
    deviceDescription: {type: 'Edm.String', nullable: false},
    cloudServiceName: {type: 'Edm.String'},
    cloudServiceInstanceName: {type: 'Edm.String'},
    cloudServiceDeploymentId: {type: 'Edm.String'},
    cloudServiceDeploymentEnvironment: {type: 'Edm.String'},
    mediaQualityList: {type: 'graph.teleconferenceDeviceMediaQuality', nullable: false, collection: true}
  }
} as EntityConfig<TeleconferenceDeviceQuality>;