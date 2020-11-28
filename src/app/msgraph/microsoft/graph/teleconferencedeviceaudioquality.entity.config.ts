import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeleconferenceDeviceAudioQuality } from './teleconferencedeviceaudioquality.entity';
import { TeleconferenceDeviceAudioQualityModel } from './teleconferencedeviceaudioquality.model';
import { TeleconferenceDeviceAudioQualityCollection } from './teleconferencedeviceaudioquality.collection';
//#endregion

export const TeleconferenceDeviceAudioQualityConfig = {
  name: "teleconferenceDeviceAudioQuality",
  base: "microsoft.graph.teleconferenceDeviceMediaQuality",
  open: true,
  model: TeleconferenceDeviceAudioQualityModel,
  collection: TeleconferenceDeviceAudioQualityCollection,
  annotations: [],
  fields: {
    
  }
} as EntityConfig<TeleconferenceDeviceAudioQuality>;