import { Duration } from 'angular-odata';

//#region ODataApi Imports
import { MediaStreamDirection } from './mediastreamdirection.enum';
//#endregion

export interface MediaStream {
  //#region ODataApi Properties
  averageAudioDegradation?: number;
  averageAudioNetworkJitter?: Duration;
  averageBandwidthEstimate?: number;
  averageJitter?: Duration;
  averagePacketLossRate?: number;
  averageRatioOfConcealedSamples?: number;
  averageReceivedFrameRate?: number;
  averageRoundTripTime?: Duration;
  averageVideoFrameLossPercentage?: number;
  averageVideoFrameRate?: number;
  averageVideoPacketLossRate?: number;
  endDateTime?: Date;
  lowFrameRateRatio?: number;
  lowVideoProcessingCapabilityRatio?: number;
  maxAudioNetworkJitter?: Duration;
  maxJitter?: Duration;
  maxPacketLossRate?: number;
  maxRatioOfConcealedSamples?: number;
  maxRoundTripTime?: Duration;
  packetUtilization?: number;
  postForwardErrorCorrectionPacketLossRate?: number;
  startDateTime?: Date;
  streamDirection: MediaStreamDirection;
  streamId?: string;
  wasMediaBypassed?: boolean;
  //#endregion
}