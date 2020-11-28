import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeleconferenceDeviceVideoQuality } from './teleconferencedevicevideoquality.entity';
import { TeleconferenceDeviceVideoQualityModel } from './teleconferencedevicevideoquality.model';
import { TeleconferenceDeviceVideoQualityCollection } from './teleconferencedevicevideoquality.collection';
//#endregion

export const TeleconferenceDeviceVideoQualityConfig = {
  name: "teleconferenceDeviceVideoQuality",
  base: "microsoft.graph.teleconferenceDeviceMediaQuality",
  open: true,
  model: TeleconferenceDeviceVideoQualityModel,
  collection: TeleconferenceDeviceVideoQualityCollection,
  annotations: [],
  fields: {
    averageInboundBitRate: {type: 'Edm.Double'},
    averageInboundFrameRate: {type: 'Edm.Double'},
    averageOutboundBitRate: {type: 'Edm.Double'},
    averageOutboundFrameRate: {type: 'Edm.Double'}
  }
} as EntityConfig<TeleconferenceDeviceVideoQuality>;