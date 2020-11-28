import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface TeleconferenceDeviceMediaQuality {
  //#region ODataApi Properties
  averageInboundJitter?: Duration;
  averageInboundPacketLossRateInPercentage?: number;
  averageInboundRoundTripDelay?: Duration;
  averageOutboundJitter?: Duration;
  averageOutboundPacketLossRateInPercentage?: number;
  averageOutboundRoundTripDelay?: Duration;
  channelIndex: number;
  inboundPackets?: number;
  localIPAddress?: string;
  localPort?: number;
  maximumInboundJitter?: Duration;
  maximumInboundPacketLossRateInPercentage?: number;
  maximumInboundRoundTripDelay?: Duration;
  maximumOutboundJitter?: Duration;
  maximumOutboundPacketLossRateInPercentage?: number;
  maximumOutboundRoundTripDelay?: Duration;
  mediaDuration?: Duration;
  networkLinkSpeedInBytes?: number;
  outboundPackets?: number;
  remoteIPAddress?: string;
  remotePort?: number;
  //#endregion
}