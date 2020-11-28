import { StructuredTypeConfig } from 'angular-odata';

//#region ODataApi Imports
import { DeviceInfo } from './deviceinfo.complex';
import { DeviceInfoModel } from './deviceinfo.model';
import { DeviceInfoCollection } from './deviceinfo.collection';
//#endregion

export const DeviceInfoConfig = {
  name: "deviceInfo",
  model: DeviceInfoModel,
  collection: DeviceInfoCollection,
  annotations: [],
  fields: {
    captureDeviceDriver: {type: 'Edm.String'},
    captureDeviceName: {type: 'Edm.String'},
    captureNotFunctioningEventRatio: {type: 'Edm.Single'},
    cpuInsufficentEventRatio: {type: 'Edm.Single'},
    deviceClippingEventRatio: {type: 'Edm.Single'},
    deviceGlitchEventRatio: {type: 'Edm.Single'},
    howlingEventCount: {type: 'Edm.Int32'},
    initialSignalLevelRootMeanSquare: {type: 'Edm.Single'},
    lowSpeechLevelEventRatio: {type: 'Edm.Single'},
    lowSpeechToNoiseEventRatio: {type: 'Edm.Single'},
    micGlitchRate: {type: 'Edm.Single'},
    receivedNoiseLevel: {type: 'Edm.Int32'},
    receivedSignalLevel: {type: 'Edm.Int32'},
    renderDeviceDriver: {type: 'Edm.String'},
    renderDeviceName: {type: 'Edm.String'},
    renderMuteEventRatio: {type: 'Edm.Single'},
    renderNotFunctioningEventRatio: {type: 'Edm.Single'},
    renderZeroVolumeEventRatio: {type: 'Edm.Single'},
    sentNoiseLevel: {type: 'Edm.Int32'},
    sentSignalLevel: {type: 'Edm.Int32'},
    speakerGlitchRate: {type: 'Edm.Single'}
  }
} as StructuredTypeConfig<DeviceInfo>;