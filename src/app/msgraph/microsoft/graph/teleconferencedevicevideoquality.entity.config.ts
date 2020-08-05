import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeleconferenceDeviceVideoQuality } from './teleconferencedevicevideoquality.entity';
//#endregion

export const TeleconferenceDeviceVideoQualityConfig = {
  name: "TeleconferenceDeviceVideoQuality",
  base: "microsoft.graph.teleconferenceDeviceMediaQuality",
  open: true,
  annotations: [],
  fields: {
    averageInboundFrameRate: {type: 'Edm.Double'},
    averageOutboundFrameRate: {type: 'Edm.Double'},
    averageInboundBitRate: {type: 'Edm.Double'},
    averageOutboundBitRate: {type: 'Edm.Double'}
  }
} as EntityConfig<TeleconferenceDeviceVideoQuality>;