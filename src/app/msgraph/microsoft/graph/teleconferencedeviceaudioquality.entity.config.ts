import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeleconferenceDeviceAudioQuality } from './teleconferencedeviceaudioquality.entity';
//#endregion

export const TeleconferenceDeviceAudioQualityConfig = {
  name: "TeleconferenceDeviceAudioQuality",
  base: "microsoft.graph.teleconferenceDeviceMediaQuality",
  open: true,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<TeleconferenceDeviceAudioQuality>;