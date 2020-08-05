import { Duration } from 'angular-odata';

//#region ODataApi Imports
//#endregion

export interface TeleconferenceDeviceMediaQuality {
  //#region ODataApi Properties
  channelIndex: number;
  mediaDuration?: Duration;
  networkLinkSpeedInBytes?: number;
  localIPAddress?: string;
  localPort?: number;
  remoteIPAddress?: string;
  remotePort?: number;
  inboundPackets?: number;
  outboundPackets?: number;
  averageInboundPacketLossRateInPercentage?: number;
  averageOutboundPacketLossRateInPercentage?: number;
  maximumInboundPacketLossRateInPercentage?: number;
  maximumOutboundPacketLossRateInPercentage?: number;
  averageInboundRoundTripDelay?: Duration;
  averageOutboundRoundTripDelay?: Duration;
  maximumInboundRoundTripDelay?: Duration;
  maximumOutboundRoundTripDelay?: Duration;
  averageInboundJitter?: Duration;
  averageOutboundJitter?: Duration;
  maximumInboundJitter?: Duration;
  maximumOutboundJitter?: Duration;
  //#endregion
}