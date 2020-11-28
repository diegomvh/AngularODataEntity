import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeleconferenceDeviceQuality } from './teleconferencedevicequality.complex';
import { TeleconferenceDeviceQualityModel } from './teleconferencedevicequality.model';
import { TeleconferenceDeviceQualityCollection } from './teleconferencedevicequality.collection';
//#endregion

export const TeleconferenceDeviceQualityConfig = {
  name: "teleconferenceDeviceQuality",
  open: true,
  model: TeleconferenceDeviceQualityModel,
  collection: TeleconferenceDeviceQualityCollection,
  annotations: [],
  fields: {
    callChainId: {type: 'Edm.Guid', nullable: false},
    cloudServiceDeploymentEnvironment: {type: 'Edm.String'},
    cloudServiceDeploymentId: {type: 'Edm.String'},
    cloudServiceInstanceName: {type: 'Edm.String'},
    cloudServiceName: {type: 'Edm.String'},
    deviceDescription: {type: 'Edm.String', nullable: false},
    deviceName: {type: 'Edm.String', nullable: false},
    mediaLegId: {type: 'Edm.Guid', nullable: false},
    mediaQualityList: {type: 'graph.teleconferenceDeviceMediaQuality', nullable: false, collection: true},
    participantId: {type: 'Edm.Guid', nullable: false}
  }
} as StructuredTypeConfig<TeleconferenceDeviceQuality>;