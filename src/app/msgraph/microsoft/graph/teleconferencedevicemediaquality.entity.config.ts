import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeleconferenceDeviceMediaQuality } from './teleconferencedevicemediaquality.entity';
import { TeleconferenceDeviceMediaQualityModel } from './teleconferencedevicemediaquality.model';
import { TeleconferenceDeviceMediaQualityCollection } from './teleconferencedevicemediaquality.collection';
//#endregion

export const TeleconferenceDeviceMediaQualityConfig = {
  name: "teleconferenceDeviceMediaQuality",
  open: true,
  model: TeleconferenceDeviceMediaQualityModel,
  collection: TeleconferenceDeviceMediaQualityCollection,
  annotations: [],
  fields: {
    averageInboundJitter: {type: 'Edm.Duration'},
    averageInboundPacketLossRateInPercentage: {type: 'Edm.Double'},
    averageInboundRoundTripDelay: {type: 'Edm.Duration'},
    averageOutboundJitter: {type: 'Edm.Duration'},
    averageOutboundPacketLossRateInPercentage: {type: 'Edm.Double'},
    averageOutboundRoundTripDelay: {type: 'Edm.Duration'},
    channelIndex: {type: 'Edm.Int32', nullable: false},
    inboundPackets: {type: 'Edm.Int64'},
    localIPAddress: {type: 'Edm.String'},
    localPort: {type: 'Edm.Int32'},
    maximumInboundJitter: {type: 'Edm.Duration'},
    maximumInboundPacketLossRateInPercentage: {type: 'Edm.Double'},
    maximumInboundRoundTripDelay: {type: 'Edm.Duration'},
    maximumOutboundJitter: {type: 'Edm.Duration'},
    maximumOutboundPacketLossRateInPercentage: {type: 'Edm.Double'},
    maximumOutboundRoundTripDelay: {type: 'Edm.Duration'},
    mediaDuration: {type: 'Edm.Duration'},
    networkLinkSpeedInBytes: {type: 'Edm.Int64'},
    outboundPackets: {type: 'Edm.Int64'},
    remoteIPAddress: {type: 'Edm.String'},
    remotePort: {type: 'Edm.Int32'}
  }
} as EntityConfig<TeleconferenceDeviceMediaQuality>;