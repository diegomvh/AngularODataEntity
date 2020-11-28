import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface DeviceInfo {
  //#region ODataApi Properties
  captureDeviceDriver?: string;
  captureDeviceName?: string;
  captureNotFunctioningEventRatio?: number;
  cpuInsufficentEventRatio?: number;
  deviceClippingEventRatio?: number;
  deviceGlitchEventRatio?: number;
  howlingEventCount?: number;
  initialSignalLevelRootMeanSquare?: number;
  lowSpeechLevelEventRatio?: number;
  lowSpeechToNoiseEventRatio?: number;
  micGlitchRate?: number;
  receivedNoiseLevel?: number;
  receivedSignalLevel?: number;
  renderDeviceDriver?: string;
  renderDeviceName?: string;
  renderMuteEventRatio?: number;
  renderNotFunctioningEventRatio?: number;
  renderZeroVolumeEventRatio?: number;
  sentNoiseLevel?: number;
  sentSignalLevel?: number;
  speakerGlitchRate?: number;
  //#endregion
}