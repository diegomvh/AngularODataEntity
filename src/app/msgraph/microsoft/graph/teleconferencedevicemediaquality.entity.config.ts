import { EntityConfig } from 'angular-odata';

//#region ODataApi Imports
import { TeleconferenceDeviceMediaQuality } from './teleconferencedevicemediaquality.entity';
//#endregion

export const TeleconferenceDeviceMediaQualityConfig = {
  name: "teleconferenceDeviceMediaQuality",
  open: true,
  annotations: [],
  fields: {
    channelIndex: {type: 'Edm.Int32', nullable: false},
    mediaDuration: {type: 'Edm.Duration'},
    networkLinkSpeedInBytes: {type: 'Edm.Int64'},
    localIPAddress: {type: 'Edm.String'},
    localPort: {type: 'Edm.Int32'},
    remoteIPAddress: {type: 'Edm.String'},
    remotePort: {type: 'Edm.Int32'},
    inboundPackets: {type: 'Edm.Int64'},
    outboundPackets: {type: 'Edm.Int64'},
    averageInboundPacketLossRateInPercentage: {type: 'Edm.Double'},
    averageOutboundPacketLossRateInPercentage: {type: 'Edm.Double'},
    maximumInboundPacketLossRateInPercentage: {type: 'Edm.Double'},
    maximumOutboundPacketLossRateInPercentage: {type: 'Edm.Double'},
    averageInboundRoundTripDelay: {type: 'Edm.Duration'},
    averageOutboundRoundTripDelay: {type: 'Edm.Duration'},
    maximumInboundRoundTripDelay: {type: 'Edm.Duration'},
    maximumOutboundRoundTripDelay: {type: 'Edm.Duration'},
    averageInboundJitter: {type: 'Edm.Duration'},
    averageOutboundJitter: {type: 'Edm.Duration'},
    maximumInboundJitter: {type: 'Edm.Duration'},
    maximumOutboundJitter: {type: 'Edm.Duration'}
  }
} as EntityConfig<TeleconferenceDeviceMediaQuality>;