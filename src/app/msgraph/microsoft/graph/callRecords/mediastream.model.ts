import { ODataModel, ODataCollection, HttpOptions, Duration } from 'angular-odata';
import { HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

//#region ODataApi Imports
import { MediaStreamDirection } from './mediastreamdirection.enum';
import { MediaStream } from './mediastream.entity';
import { MediaStreamCollection } from './mediastream.collection';
//#endregion

export class MediaStreamModel<E extends MediaStream> extends ODataModel<E> {
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
  //#region ODataApi Actions
  //#endregion
  //#region ODataApi Functions
  //#endregion
  //#region ODataApi Navigations
  //#endregion
}